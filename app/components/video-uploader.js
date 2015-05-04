import Ember from 'ember';

export default Ember.Component.extend({
	//HstryEd.YoutubeVideoMixin,
	/*
 * Uploader for a YouTube video. Needs:
 * - youtubeUrl: a complete Youtube url. Required.
 * - errors: errors to be displayed. Optional.
 * - model: model on which the embed code is saved (e.g. "event" or "item"). Required.
 * - attribute: name of the attribute on which the youtube embed code is saved. Required.
 * - showPreview: if false, does not show a preview. Optional.
 * - doFocus: if true, focuses on the URL textfield when initialized. Optional.
 */
  classNames: ['video-uploader'],
  classNameBindings: ['errors:error'],
  /* Constants */
  YOUTUBE_VIDEO_ID_LENGTH: 11,
  /* Attributes */
  url: '',
  youtubeVideoId: '',
  isValidEmbedCode: false,
  youtubeVideoIdEmpty: Em.computed.empty('youtubeVideoId'),
  showPreview: true,
  /* Callbacks */
  didInsertElement: function() {
    var model = this.get('model');
    var attribute = this.get('attribute');

    var youtubeVideoId = model.get(attribute);
    if (!!youtubeVideoId) {
      this.set('url', this.videoURL(youtubeVideoId));
      this.set('youtubeVideoId', youtubeVideoId)
    }
  },

  _parseUrl: function(url) {
    if (Ember.isEmpty(url)) {
      return '';
    } else {
      var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
      var match = url.match(regExp);

      if (match && match[2].length === this.YOUTUBE_VIDEO_ID_LENGTH) {
        return match[2];
      } else {
        return '';
      }
    }
  },

  urlChanged: function() {
    var url = this.get('url');
    this.set('youtubeVideoId', this._parseUrl(url))
  }.observes('url'),

  checkValidEmbedCode: function() {
    Ember.run.once(this, function() {
      Em.debug('running checkValidEmbedCode');

      var youtubeVideoId = this.get('youtubeVideoId');

      if (Em.isEmpty(youtubeVideoId)) {
        this.set('isValidEmbedCode', false);
      } else {
        // To check if the video exists
        var youtubeUrl = 'https://gdata.youtube.com/feeds/api/videos/' + youtubeVideoId + '?v=2&alt=jsonc';

        var self = this;
        HstryEd.Utility.get(youtubeUrl).then(function() {
          self.set('isValidEmbedCode', true);
        }, function() {
          self.set('isValidEmbedCode', false);
        });
      }
    });
  }.observes('youtubeVideoId'),

  youtubeVideoIdChanged: function(){
    Ember.run.once(this, function() {
      if (this.get('isValidEmbedCode')) {
        var model = this.get('model');
        var attribute = this.get('attribute');
        var youtubeVideoId = this.get('youtubeVideoId');
        if (!Em.isNone(model) && !Em.isNone(attribute)) {
          if (model.get(attribute) !== youtubeVideoId) {
            model.set(attribute, youtubeVideoId);
            Em.debug('Saving model');
            model.save().then(function() {
            }, function() {
              model.rollback();
            });
          }
        }
      }
    });
  }.observes('youtubeVideoId', 'isValidEmbedCode')

});
