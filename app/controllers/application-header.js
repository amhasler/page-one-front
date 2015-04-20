import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['application'],

	showHeader: function() {
		return this.get('controllers.application.showHeader')
	}.property('controllers.application.showHeader'),
	actions: {
		toggleHeader: function() {
			this.set('controllers.application.showHeader', false)
		}
	}
});
