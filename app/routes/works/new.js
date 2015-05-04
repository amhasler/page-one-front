import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel: function(transition){
    this.set('collection',transition.queryParams.collection);
  },
  model: function() {
	  var self = this;
	  return new Ember.RSVP.Promise(function(resolve) {
	    self.store.find('collection', self.get('collection')).then(function(collection) {
	      var work = self.store.createRecord('work', {
	        //title: "it worked",
	        //date: 2015,
	        //place: "Boston, MA",
	        collection: collection
	      });

	      resolve(work.save());
	    });
	  });
	},
  afterModel: function(work) {
  	console.log(work);
    this.replaceWith('work', work, {queryParams: {edit: true}});
  }
});