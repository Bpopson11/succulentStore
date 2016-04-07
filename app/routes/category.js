import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('category', params.category_id);
  },
  actions: {
    saveItem(params) {
      var newItem = this.store.createRecord('item', params);
      var category = params.category;
      category.get('items').addObject(newItem);
      newItem.save().then(function() {
        return category.save();
      });
      this.transitionTo('category', params.category);
    }
  }
});
