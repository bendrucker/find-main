# find-main [![Build Status](https://travis-ci.org/bendrucker/find-main.svg?branch=master)](https://travis-ci.org/bendrucker/find-main)

> Find the "main" path from package.json


## Install

```
$ npm install --save find-main
```


## Usage

```js
var findMain = require('find-main');

findMain(cwd);
//=> ./path/to/main
```

## API

#### `findMain([cwd])` -> `String` / `Boolean`

`findMain` starts at `cwd` and looks upwards until it finds a `package.json`. When it finds one, it returns the `"main"` entry as an absolute path.

If no package is found, an exception is thrown. If a package is found but no `"main"` entry is available, `false` is returned. Otherwise, the absolute `main` path is returned.

##### cwd

Type: `string`  
Default: `process.cwd()`


## License

MIT © [Ben Drucker](http://bendrucker.me)
