'use strict'

import {sync as mothershipSync} from 'mothership'
import {resolve, dirname} from 'path'

export default function findMain (cwd) {
  cwd = cwd || process.cwd()
  const pkg = mothershipSync(cwd, Boolean)
  if (!pkg) throw new Error(`No package.json found from "${cwd}"`)
  const {main} = pkg.pack
  if (!main) return false
  return resolve(dirname(pkg.path), main)
}
