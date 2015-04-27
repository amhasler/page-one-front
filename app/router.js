import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('works', function() {
    this.resource('work', { path: '/:work_id' });
  });
  this.resource('users', function() {
    this.resource('user', { path: '/:user_id' });
  });
  this.resource('collections', function() {
  	this.resource('collection', { path: '/:collection_id'});
  });
  this.route('login');
  // this.route("secret", {path: '/'});
});