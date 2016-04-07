import Ember from 'ember';

export default Ember.Component.extend({
  addNewItem: false,
  actions: {
    itemFormShow() {
      this.set('addNewItem', true);
    },
    saveItem() {
      var params = {
        category: this.get('category'),
        name: this.get('name') ? this.get('name') : "",
        description: this.get('description') ? this.get('description') : "",
        size: this.get('size') ? this.get('size') : "",
        price: parseInt(this.get('price') ? this.get('price') : ""),
        image: this.get('image') ? this.get('image') : "",

      };
      this.set('addNewItem', false);
      this.sendAction('saveItem', params);
    }
  }
});
