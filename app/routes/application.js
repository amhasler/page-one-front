// routes/application.js
import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
	actions: {
		/* Shows a notification message. `status` is either "error" or "success" */
    showNotification: function(status, message) {
      this.controllerFor('notification').send('showMessage', status, message);
    },
	}
});