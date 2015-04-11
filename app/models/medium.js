import DS from 'ember-data';

export default DS.Model.extend({
  caption: DS.attr('string'),
  video: DS.attr('string'),
  contentType: DS.attr('string'),
  image: DS.attr('image'),
  audioAttachment: DS.attr('string'),
  featured: DS.attr('boolean'),

  work: DS.belongsTo('work')

});