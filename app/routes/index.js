import Ember from 'ember';

export default Ember.Route.extend({ 
	model: function() { 
	 	return this.store.find('collection', 1); 
	},
	afterModel: function() {
		this.controllerFor('application').set('isFull', true);
	}
});