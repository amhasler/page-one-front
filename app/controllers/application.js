import Ember from 'ember';
import Session from "simple-auth/session";

export default Ember.Controller.extend({
	showHeader: false,
	init: function() {
		console.log(this.get('session.currentUser'))
	},
	actions: {
		toggleHeader: function() {
			this.set('showHeader', false)
		}
	}
});
