'use strict';

var Hapi = require('hapi');
var Path = require('path');

var server = new Hapi.Server('localhost', 3000, {
  debug: {
    request: [ 'error' ]
  }
});

server.route({
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: Path.join(__dirname, '..', 'dist')
    }
  }
});

server.start(function () {
  console.log('Restinator server running at:', server.info.uri);
});
