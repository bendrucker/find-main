'use strict'

var mothershipSync = require('mothership').sync
var dirname = require('path').dirname
var resolveSync = require('resolve').sync
var asRelative = require('dot-slash').enforce
var format = require('util').format

module.exports = function findMain (cwd) {
  cwd = cwd || process.cwd()
  var pkg = mothershipSync(cwd, Boolean)
  if (!pkg) throw new Error(format('No package.json found from "%s"', cwd))
  var main = pkg.pack.main
  if (!main) return false
  return resolveSync(asRelative(main), {basedir: dirname(pkg.path)})
}
