import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var work = this.container.lookupFactory('factory:work').create().createWork(
      "Title of the work",
      "Location",
      "Date"
      // collection
    );

    return work.save();
  },
  afterModel: function(work) {

    this.replaceWith('work', work, {queryParams: {edit: true}});
  }
});