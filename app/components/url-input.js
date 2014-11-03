import Ember from 'ember';

var protocolMatcher = /^(\s*https?):\/\/(.*)/;

export default Ember.Component.extend({
  tagName: 'span',

  protocolOptions: [
    { value: 'http', label: 'http://' },
    { value: 'https', label: 'https://' }
  ],

  // Move protocol to protocol field, if entered in the URL field.
  urlWatcher: function() {
    var self = this;

    this.get('url').replace(protocolMatcher, function (match, protocol, url) {
      if (protocol) {
        self.set('protocol', protocol);
        self.set('url', url);
      }
    });
  }.observes('url')
});
