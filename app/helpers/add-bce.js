import Ember from "ember";

export default Ember.Handlebars.makeBoundHelper(function (value, options) {

	if (value) {
		if (value < 0) {
			return new Ember.Handlebars.SafeString('<span>' + (value*-1) + ' BCE</span>');	
	  } else {
	  	return new Ember.Handlebars.SafeString('<span>' + value + ' CE</span>');
	  }
	}
  
  
});