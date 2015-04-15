import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['map'],
	didInsertElement: function() {
		var mapOptions = {
			center: { lat: -34.397, lng: 150.644},
			zoom: 8
		};
		setTimeout(function(){
			var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
		}, 1000);

	}
});
