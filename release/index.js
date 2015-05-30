'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = findMain;

var _mothership = require('mothership');

var _path = require('path');

'use strict';

function findMain(cwd) {
  cwd = cwd || process.cwd();
  var pkg = _mothership.sync(cwd, Boolean);
  if (!pkg) throw new Error('No package.json found from "' + cwd + '"');
  var main = pkg.pack.main;

  if (!main) return false;
  return _path.resolve(_path.dirname(pkg.path), main);
}

module.exports = exports['default'];