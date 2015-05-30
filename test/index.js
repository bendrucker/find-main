'use strict'

import test from 'tape'
import {resolve} from 'path'
import proxyquire from 'proxyquire'

test((t) => {
  let findMain = require('../')
  t.equal(findMain(resolve(__dirname, 'fixtures/normal')), './src')
  t.equal(findMain(resolve(__dirname, 'fixtures/dot-slash')), './src')

  findMain = proxyquire('../', {
    mothership: {
      sync: () => false
    }
  })
  t.throws(findMain.bind(null, resolve(__dirname, 'fixtures/no-package')), RegExp.escape('No package.json found from'))

  t.end()
})
