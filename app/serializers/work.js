import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  serializeIntoHash: function(data, type, record, options) {
    var properties = this.serialize(record, options);
    for(var prop in properties){
      if(properties.hasOwnProperty(prop)){
        data[prop] = properties[prop];
      }
    }
  }
});