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
  headers: DS.hasMany('request-header'),

  addDefaultHeaders: function () {
    Object.keys(defaultHeaders).forEach(function (name) {
      this.store.createRecord('request-header', {
        name: name,
        value: defaultHeaders[name],
        request: this
      });
    }, this);
  }
});
