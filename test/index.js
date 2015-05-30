'use strict'

import test from 'tape'
import {resolve, isAbsolute, relative} from 'path'
import proxyquire from 'proxyquire'

test((t) => {
  let findMain = require('../')
  let main, cwd

  cwd = resolve(__dirname, 'fixtures/normal')
  main = findMain(cwd)
  t.ok(isAbsolute(main))
  t.equal(relative(cwd, main), 'src')

  cwd = resolve(__dirname, 'fixtures/dot-slash')
  main = findMain(cwd)
  t.ok(isAbsolute(main))
  t.equal(relative(cwd, main), 'src')

  findMain = proxyquire('../', {
    mothership: {
      sync: () => false
    }
  })
  t.throws(findMain.bind(null, resolve(__dirname, 'fixtures/no-package')), RegExp.escape('No package.json found from'))

  t.end()
})
