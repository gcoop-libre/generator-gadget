'use strict';

var assert = require('yeoman-assert');
var os = require('os');
var path = require('path');
var test = require('yeoman-test');

describe('gadget:app for Drupal 8', function () {
  before(function (done) {
    var testDir = path.join(os.tmpdir(), './temp-test');
    test.run(path.join(__dirname, '../app'))
      .inDir(testDir)
      .withOptions({
        'skip-install': true,
        projectName: 'drupal8',
        projectDescription: 'test drupal8 project',
        drupalDistro: 'drupal',
        drupalDistroVersion: '8.x'
      })
      .on('end', done);
  });

  it('creates files', function() {
    assert.file([
      'README.md',
      'composer.json',
      // gtd scaffolding dotfiles are copying.
      'src/modules/.gitkeep',
      // General-purpose behat.yml is not overridden.
      'test/behat.yml',
      // Behat example tests are present.
      'test/features/example.feature',
    ]);
  });
});
