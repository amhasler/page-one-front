import Ember from 'ember';

export default Ember.Controller.extend({
	showHeader: false,
	isFull: true,
	actions: {
		toggleHeader: function() {
			this.set('showHeader', false);
		}
	}
});
