import Ember from 'ember';

export default Ember.Route.extend({ 
	model: function(params) { 
		return this.store.find('collection', params.collection_id); 
	} 
});