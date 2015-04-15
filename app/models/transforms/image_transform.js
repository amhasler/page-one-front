/* Add an 'image' type for models */
/*
export default DS.Transform.extend({
  serialize: function(value) {
    if (value) {
      return {
        identifier: value.identifier,
        url: value.url,
        thumb_url: value.thumbUrl
      };
    } else {
      return null;
    }
  },
  deserialize: function(value) {
    if (value) {
      return PageOne.Image.create({
        identifier: value.identifier,
        url: value.url,
        thumbUrl: value.thumbUrl
      });
    } else {
      return null;
    }
  }
});
*/