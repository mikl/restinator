import Ember from 'ember';
import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('route:request', 'RequestRoute', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function() {
  var route = this.subject();
  ok(route);
});

/**
 * TODO: Not quite sure how to test that the route actually instantiates
 * the model. Should be fixed.
test('route creates new Request', function() {
  var route = this.subject();
  var model;

  // XXX: Not sure if this is the right way to go, but the store is not
  // automatically injected when running tests, so we add it to the
  // route manually. Not pretty..
  route.store = this.store();

  Ember.run(function() {
    route.activate();
  });

  ok(route.get('model').get('isNew'));
  ok(model.get('model').get('isDirty'));
});
/**/
