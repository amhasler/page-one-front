import Ember from "ember";  
import Session from "simple-auth/session";

export default {  
  name: "custom-session",
  before: "simple-auth",
  initialize: function(container) {
    Session.reopen({
      currentUser: function() {
        var email = this.get('secure.email');
        if (!Ember.isEmpty(email)) {
          return container.lookup('store:main').find('user', email);
        }
      }.property("secure.email")
    });
  }
};