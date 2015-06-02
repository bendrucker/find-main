'use strict'

var test = require('tape')
var path = require('path')
var proxyquire = require('proxyquire')
var escape = require('escape-string-regexp')

test(function (t) {
  var findMain = require('../')
  var main, cwd

  cwd = path.resolve(__dirname, 'fixtures/normal')
  main = findMain(cwd)
  t.ok(path.isAbsolute(main))
  t.equal(path.relative(cwd, main), 'src/index.js')

  cwd = path.resolve(__dirname, 'fixtures/dot-slash')
  main = findMain(cwd)
  t.ok(path.isAbsolute(main))
  t.equal(path.relative(cwd, main), 'src/foo.js')

  findMain = proxyquire('../', {
    mothership: {
      sync: function () {return false}
    }
  })
  t.throws(findMain.bind(null, path.resolve(__dirname, 'fixtures/no-package')), escape('No package.json found from'))

  t.end()
})
