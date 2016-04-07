import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr(),
  image: DS.attr(),
  // items: DS.hasMany('item', {async: true})
});
