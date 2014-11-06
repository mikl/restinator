import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addHeader: function () {
      // The logic for adding the header must be implemented by whoever
      // uses this component.
      this.sendAction('addHeader');
    }
  }
});
