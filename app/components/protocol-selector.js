import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  protocolOptions: [
    { value: 'http', label: 'http://' },
    { value: 'https', label: 'https://' }
  ]
});
