/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

app.import('bower_components/jquery-backstretch/jquery.backstretch.js');

app.import('bower_components/ember/ember-template-compiler.js');

module.exports = app.toTree();
