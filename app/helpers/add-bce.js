import Ember from "ember";

export default Ember.Handlebars.makeBoundHelper(function (min_year, max_year, circa, options) {

	var finalString = ""
	var minYear = min_year
	var maxYear = max_year
	
	if (circa) {
		finalString = "ca. "
	}
	if (minYear < 0) {
		minYear = (minYear*-1) + ' BCE';	
  } else {
  	minYear = minYear + ' CE';
  }
  if (maxYear) {
		if (maxYear < 0) {
			maxYear = (maxYear*-1) + ' BCE';	
		} else {
			maxYear = maxYear + ' CE';
		}
		finalString = finalString + minYear + " - " + maxYear;
		return new Ember.Handlebars.SafeString('<span>' + finalString + '</span>')
	} else {
		finalString = finalString + minYear;
		return new Ember.Handlebars.SafeString('<span>' + finalString + '</span>')
	}
  
});