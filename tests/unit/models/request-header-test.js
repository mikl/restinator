import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('request-header', 'RequestHeader', {
  // Specify the other units that are required for this test.
  needs: ['model:request']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
