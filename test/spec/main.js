/*global require*/
'use strict';

require.config({
  shim: {
  },
  baseUrl: 'scripts/',
  paths: {
    jquery: '../bower_components/jquery/dist/jquery',
    backbone: '../bower_components/backbone/backbone',
    underscore: '../bower_components/lodash/dist/lodash'  }
});

var tests = [
  'spec/fixtures.js',
  'spec/collections/pictures.spec.js',
  'spec/models/picture.spec.js',
  'spec/views/app.spec.js',
  'spec/views/picture-grid.spec.js',
  'spec/views/picture-item.spec.js',
  'spec/views/picture-modal.spec.js'
];

require(tests, function() {
  mocha.run();
});
