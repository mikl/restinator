import DS from 'ember-data';

var defaultHeaders = {
  Accept: 'application/json',
  'Accept-Charset': 'utf-8',
  'Content-Type': 'application/json',
};

export default DS.Model.extend({
  protocol: DS.attr('string', {
    defaultValue: 'http',
  }),
  url: DS.attr('string'),
  method: DS.attr('string'),
  headers: DS.hasMany('request-header'),
  body: DS.attr('string'),

  /**
   * Property to allow access to the body field.
   */
  accessBodyField: function() {
    var method = this.get('method');

    if (
      method === 'POST' ||
      method === 'PUT' ||
      method === 'PATCH'
    ) {
      return true;
    }

    return false;
  }.property('method'),

  addDefaultHeaders: function () {
    Object.keys(defaultHeaders).forEach(function (name) {
      this.store.createRecord('request-header', {
        name: name,
        value: defaultHeaders[name],
        request: this
      });
    }, this);

    return this;
  }
});
