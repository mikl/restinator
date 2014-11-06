import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    addHeader: function () {
      this.store.createRecord('request-header', {
        request: this.get('model')
      });
    }
  }
});
