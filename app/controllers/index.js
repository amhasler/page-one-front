import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['application'],
	isAuthor: function() {
		return this.get('model.user') == this.get('session.currentUser')
	}.property('model.user'),
	actions: {
		toggleHeader: function() {
			this.set('controllers.application.showHeader', true)
		},
		toggleMap: function() {
			if($('.map').is(':visible')){
				$('.map').fadeOut('slow',function(){
					$('.timeline').fadeIn('slow');
				});
			}
		},
		toggleTimeline: function() {
			if($('.timeline').is(':visible')){
				$('.timeline').fadeOut('slow',function(){
					$('.map').fadeIn('slow');
				});
			}
		}
	}
});
