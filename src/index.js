'use strict'

import {sync as mothershipSync} from 'mothership'
import {enforce as enforceRelative} from 'dot-slash'

export default function findMain (cwd) {
  cwd = cwd || process.cwd()
  const pkg = mothershipSync(cwd, Boolean)
  if (!pkg) throw new Error(`No package.json found from "${cwd}"`)
  const {main} = pkg.pack
  if (!main) return false
  return enforceRelative(main)
}
