import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),

  works: DS.hasMany('work'),
  user: DS.belongsTo('user')
});