import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['inplace-editor'],
  classNameBindings: ['isEditing', 'name', 'errors:error'],
  /* Properties */
  placeholder: "Change the title",
  name: "",
  hasTextChanged: function() {
    return this.get('model.isDirty') && this.get('oldText') != this.get('text');
  }.property('model.isDirty', 'oldText', 'text').readOnly(),
  _resizeTextarea: function() {
    Ember.run.scheduleOnce('afterRender', this, function() {
      this.$('textarea').trigger('autosize.resize');
    });
  },
  /* Actions */
  actions: {
    edit: function() {
      this.set('isEditing', true);
      this.set('oldText', this.get('text'));

      this._resizeTextarea();
    },
    acceptChanges: function() {
      this.set('isEditing', false);

      if (this.get('hasTextChanged')) {
        this.get('model').save();
      }
    },
    newLineInserted: function() {
      // This will trigger a 'focus-out' event
      this.$('textarea').blur();
    }
  }
});
