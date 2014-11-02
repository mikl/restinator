import DS from 'ember-data';

export default DS.Model.extend({
  protocol: DS.attr('string', {
    defaultValue: 'http',
  }),
  url: DS.attr('string')
});
