import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  minYear: DS.attr('number'),
  maxYear: DS.attr('number'),
  place: DS.attr('string'),
  latitude: DS.attr('number'),
  longitude: DS.attr('number'),
  circa: DS.attr('boolean'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),

  collection: DS.belongsTo('collection'),

  creators: DS.hasMany('creators'),
  modes: DS.hasMany('modes'),
  references: DS.hasMany('references')
});