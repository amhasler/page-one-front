/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'page-one-front',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  }

  ENV.contentSecurityPolicy = {
    'default-src': "'none'",
    'connect-src': "'self' 'localhost' http://localhost:3000",
    'font-src': "'self' http://fonts.gstatic.com", // Allow fonts to be loaded from http://fonts.gstatic.com
    'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com", // Allow inline styles and loaded CSS from http://fonts.googleapis.com 
    'script-src': "'self' 'unsafe-inline' 'unsafe-eval' maps.googleapis.com maps.google.com maps.gstatic.com",
    'img-src': "'self' maps.gstatic.com mt1.googleapis.com http://mt0.googleapis.com maps.googleapis.com csi.gstatic.com",
  }

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  //config/environment.js
  ENV['simple-auth'] = {
    authorizer: 'simple-auth-authorizer:devise'
  }
  ENV['simple-auth-devise'] = {
    identificationAttributeName: 'email'
  };

  return ENV;
};
