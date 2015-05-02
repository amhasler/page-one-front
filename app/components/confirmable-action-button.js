import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['confirmable-action-button'],
  classNameBindings: ['name'],
  /* Defaults */
  confirmText: "Yes I'm sure",
  cancelText: "Cancel",
  /* Properties */
  buttonClass: function() {
    return "button-" + this.get('name');
  }.property('name'),
  /* Actions */
  actions: {
    showConfirmation: function() {
      this.toggleProperty('showConfirmationPopover');
    },
    confirm: function() {
      this.sendAction();
      // Hide the popover
      this.set('showConfirmationPopover', false);
    },
    cancel: function() {
      this.set('showConfirmationPopover', false);
    }
  }
});
