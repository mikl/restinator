import Ember from 'ember';
import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('url-input', 'UrlInputComponent', {
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

test('it splits protocol from the URL field automatically', function() {
  var component = this.subject();

  Ember.run(function() {
    // Initial protocol value is http.
    component.set('protocol', 'http');
  });

  equal(component.get('protocol'), 'http');

  // Try settting a HTTPS url.
  Ember.run(function() {
    // Initial protocol value is http.
    component.set('url', 'https://example.com/test');
  });

  // Verify that protocol and URL get correctly split.
  equal(component.get('protocol'), 'https');
  equal(component.get('url'), 'example.com/test');

  // Try settting a HTTP url.
  Ember.run(function() {
    // Initial protocol value is http.
    component.set('url', 'http://example.net/probe');
  });

  // Test that it works in the other direction.
  equal(component.get('protocol'), 'http');
  equal(component.get('url'), 'example.net/probe');
});
