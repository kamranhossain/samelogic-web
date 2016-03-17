Package.describe({
  name: 'samelogic:devtools',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md',
  debugOnly: true
});

Npm.depends({
  'react': '0.14.7',
  'redux-devtools': '3.1.1',
  'redux-devtools-dock-monitor': '1.1.0',
  'redux-devtools-log-monitor': '1.0.5'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3-beta.12');
  api.use('ecmascript');
  api.mainModule('DevTools.jsx', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('samelogic:devtools');
  api.mainModule('devtools-tests.js');
});
