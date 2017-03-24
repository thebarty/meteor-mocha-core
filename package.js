Package.describe({
  name: 'practicalmeteor:mocha-core',
  summary: 'Fibers aware mocha server side wrappers. Internal package - use practicalmeteor:mocha.',
  version: '1.0.1',
  testOnly: true,
  git: 'https://github.com/practicalmeteor/meteor-mocha-core.git'
});

Npm.depends({
  mocha: '2.4.5',
  'mocha-circleci-reporter': '0.0.2'  // hack to make reporter work https://github.com/DispatchMe/meteor-mocha/issues/2
});

Package.onUse(function (api, where) {
  api.versionsFrom('1.3');

  api.use('ecmascript');

  api.mainModule('client.js', 'client');
  api.mainModule('server.js', 'server');

  api.export(['mochaInstance', 'setupGlobals'], 'server');
});
