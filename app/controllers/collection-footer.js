import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['index'],
  collectionController: function() {
    return this.get('controllers.index');
  }.property('controllers.index'),
  /* Properties */
  isAuthor: Ember.computed.alias('indexController.isAuthor'),
});
