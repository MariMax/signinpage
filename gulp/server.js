'use strict';

var gulp = require('gulp');

var util = require('util');

var browserSync = require('browser-sync');



function browserSyncInit(baseDir, files, browser, baseFile) {
  browser = browser === undefined ? 'default' : browser;
  baseFile = baseFile===undefined ? '/index.html':baseFile

  var routes = {};
  if(baseDir === 'src' || (util.isArray(baseDir) && baseDir.indexOf('src') !== -1)) {
    routes = {
      // Should be '/bower_components': '../bower_components'
      // Waiting for https://github.com/shakyShane/browser-sync/issues/308
      '/bower_components': 'bower_components',
    };
  }

  routes['/mocks'] ='mocks';

  browserSync.instance = browserSync.init(files, {
    startPath: '/index.html',
    server: {
      baseDir: baseDir,
      routes: routes
    },
    browser: browser
  });

}

gulp.task('serve', ['watch'], function () {
  browserSyncInit([
    'src'
  ], [
    'src/assets/images/**/*',
    'src/*.html',
    'src/app/**/*.html',
    'src/{app,assets}/**/*.css'
  ]);
});

gulp.task('serve:dist', ['build'], function () {
  browserSyncInit('dist');
});

gulp.task('serve:e2e', function () {
  browserSyncInit('src');
});

gulp.task('serve:e2e-dist', ['watch'], function () {
  browserSyncInit('dist');
});
