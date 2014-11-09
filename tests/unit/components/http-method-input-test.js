import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('http-method-input', 'HttpMethodInputComponent', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it renders', function() {
  expect(2);

  // creates the component instance
  var component = this.subject();
  equal(component._state, 'preRender');

  // appends the component to the page
  this.append();
  equal(component._state, 'inDOM');
});

test('it has GET as default method', function() {
  var component = this.subject();

  equal(component.get('methodOptions')[0], 'GET');
});
