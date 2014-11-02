import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('protocol-selector', 'ProtocolSelectorComponent', {
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

test('it has the right protocol options', function() {
  equal(this.subject().get('protocolOptions')[0]['value'], 'http');
  equal(this.subject().get('protocolOptions')[1]['value'], 'https');
});
