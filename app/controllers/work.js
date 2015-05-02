import Ember from 'ember';

export default Ember.Controller.extend({
	isAuthor: function() {
		return this.get('model.collection.user') == this.get('session.currentUser');
	},
	isEditing: false,
	actions: {
		toggleEdit: function() {
			if (this.get('isEditing')) {
				this.set('isEditing', false)
			} else {
				this.set('isEditing', true)
			}
		},
		deleteWork: function() {
			var self = this;
      var work = this.get('model');

      work.destroyRecord().then(function(work) {
        self.send("showNotification", "success", "The work has been deleted.");
        self.transitionToRoute('index');
      }, function() {
        self.send("showNotification", "error", "The work could not be deleted. Please try again later.");
        work.rollback();
      });
		}
	}
});
