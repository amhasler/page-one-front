import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
  	$.backstretch('/assets/images/giotto.jpg');
  }
});