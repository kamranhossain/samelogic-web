Package.describe({
  name: 'samelogic-devtools',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
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
  console.log('environment: ' + process.env.NODE_ENV)
  if(process.env.NODE_ENV == 'development'){
    api.mainModule('DevTools.dev.jsx', 'client');
  }
  else {
    api.mainModule('DevTools.prod.jsx', 'client');
  }
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('samelogic:devtools');
  api.mainModule('devtools-tests.js');
});
