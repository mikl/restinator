import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    var model = this.store.createRecord('request');

    // When generating a new request for editing, add the default
    // headers, so we don't start from scratch every time.
    model.addDefaultHeaders();

    return model;
  }
});
