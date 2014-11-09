import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',

  methodOptions: [
    'GET',
    'POST',
    'PUT',
    'DELETE',
    'OPTIONS',
    'HEAD'
  ]
});
