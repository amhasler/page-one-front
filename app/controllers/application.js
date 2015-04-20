import Ember from 'ember';

export default Ember.Controller.extend({
	showHeader: false,
	actions: {
		toggleHeader: function() {
			this.set('showHeader', false)
		}
	}
});
