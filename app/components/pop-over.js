import Ember from 'ember';

export default Ember.Component.extend({
	  // tagName: 'section',
  classNames: ['popover'],
  classNameBindings: ['position'],
  didInsertElement: function() {
    // Make it active, for CSS transition
    // Add a small delay to wait for rendering.
    // Ember.run.later(this, function() {
      Ember.run.scheduleOnce('afterRender', this, function() {
        this.$().addClass('active');
      });
    // }, 10);
  },
});
