import Ember from 'ember';

export default Ember.Controller.extend({  /* Properties */
  active: false,
  displayTime: function() {
    return 5000;
  }.property().readOnly(),
  transitionTime: function() {
    return 300;
  }.property().readOnly(),
  inTransition: false,
  /* Actions */
  actions: {
    showMessage: function(status, message) {
      this.setProperties({
        activating: true,
        status: status,
        message: message
      });

      Ember.run.later(this, function() {
        this.setProperties({
          active: true,
          activating: false,
        });
        var hideAfterDelayAction = Ember.run.later(this, function() {
          this.send('hide');
        }, this.get('displayTime'));
        this.set('hideAfterDelayAction', hideAfterDelayAction);
      }, this.get('transitionTime'));
    },
    hide: function() {
      Ember.run.cancel(this.get('hideAfterDelayAction'));

      this.set('deactivating', true);

      Ember.run.later(this, function() {
        this.setProperties({
          active: false,
          deactivating: false,
        });
      }, this.get('transitionTime'));
    }
  }

});
