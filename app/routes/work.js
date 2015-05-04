import Ember from 'ember';

export default Ember.Route.extend({ 
	model: function(params) { 
		return this.store.find('work', params.work_id); 
	},
	afterModel: function() {
		this.controllerFor('application').set('isFull', false);
	}
});