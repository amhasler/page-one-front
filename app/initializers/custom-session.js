import Ember from "ember";  
import Session from "simple-auth/session";

export default {  
  name: "custom-session",
  before: "simple-auth",
  initialize: function(container) {
    Session.reopen({
      currentUser: function() {
        var accountId = this.get('secure.account_id');
        if (!Ember.isEmpty(accountId)) {
          return container.lookup('store:main').find('user', accountId);
        }
      }.property('secure.account_id')
    });
  }
};