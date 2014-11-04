import Ember from 'ember';
import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('request', 'Request', {
  // Specify the other units that are required for this test.
  needs: ['model:request-header']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});

test('default protocol is http', function() {
  var store = this.store();
  var instance;

  Ember.run(function() {
    instance = store.createRecord('request');
  });

  ok(instance.get('protocol') === 'http');
});
