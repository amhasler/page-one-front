import Ember from 'ember';

export default Ember.View.extend({
	classNames: ['input-field'],
  classNameBindings: ['errors:error', 'name'],
  templateName: 'helpers/form_field',
  /* Callbacks */
  didInsertElement: function() {
    this._doFocus();
  },
  /* Helpers */
  _doFocus: function() {
    if (this.get('doFocus')) {
      this.$("input").focus();
      this.set('doFocus', false);
    }
  },
  /* Observers */
  onDoFocus: function() {
    // If it's been added to the DOM
    if (this.$()) {
      this._doFocus();
    }
  }.observes('doFocus'),
});
