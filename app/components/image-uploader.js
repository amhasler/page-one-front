import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['image-uploader'],
  classNameBindings: ['loading', 'imageUploaded', 'errors:error'],
  // Attributes
  url: "",
  image: null,
  showLightbox: true,
  /* URL of the image upload API endpoint */
  apiUrl: function() {
    // return HstryEd.RequestPaths.image_upload_path();
  }.property().readOnly(),
  /* Properties */
  imageUploaded: function() {
    return !Ember.isNone(this.get('image.url')) && !this.get('loading');
  }.property('image.url', 'loading'),
  /* Helpers */
  _initUpload: function() {
    // Clear the messages
    this.set("requestMessages", null);
    // Set loading
    this.set('loading', true);
  },
  _handleImageUploaded: function(image) {
    var self = this;

    var model = this.get('model');
    var attribute = this.get('attribute');

    //model.set(attribute, HstryEd.Image.create(HstryEd.Utility.normalize(image)));
    model.save().then(function(image) {
      // // Finished loading.
      // self.set('loading', false);
      // Send the 'uploaded' action
      self.sendAction('uploaded');
    }, function() {
      // Unset the image
      model.set(attribute, null);
    }).finally(function() {
      // Finish loading.
      self.set('loading', false);
    });
  },
  _handleImageNotUploaded: function(errors) {
    //this.set('requestMessages', HstryEd.RequestMessagesObject.create({ type: "error", json: errors}));
    this.set('loading', false);
  },
  // Actions
  actions: {
    uploadImage: function() {
      var self = this;

      this._initUpload();
            
      HstryEd.Utility.post(
        this.get('apiUrl'),
        {
          url: this.get('url')
        }
      ).then(function(image) {
        self._handleImageUploaded(image);
      }, function(data) {
        self._handleImageNotUploaded(data.responseJSON);
      });
    },
    /*
    deleteImage: function() {
      this.set('url', '');
      this.set('image', null);
      this.get('model').save();
    },
    */
    /* Callbacks from file-uploader component */
    initFileUpload: function() {
      this._initUpload();
    },
    fileUploadSuccess: function(file) {
      this._handleImageUploaded(file);
    },
    fileUploadFailure: function(response) {
      this._handleImageNotUploaded(response);
    }
  }

});
