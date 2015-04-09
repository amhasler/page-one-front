import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  date: DS.attr('number'),
  place: DS.attr('string'),
  circa: DS.attr('boolean'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),

  collection: DS.belongsTo('collection'),

  creators: DS.hasMany('creators'),
  modes: DS.hasMany('modes'),
  references: DS.hasMany('references')
});