import Ember from 'ember';

export default Ember.View.extend({
	classNames: ['application-header'],
	classNameBindings: ['controller.showHeader:show'],
	tagName: 'header',
	templateName: 'application-header'
});
