import Ember from 'ember';

export default Ember.Component.extend({
	firstStep: true,
	actions: {
		uploadVideo: function() {
			this.set('firstStep',false)
			this.set('isVideo',true);
		},
		uploadImage: function() {
			this.set('firstStep',false)
			this.set('isImage',true);
		},
		cancel: function() {

		}
	}
});
