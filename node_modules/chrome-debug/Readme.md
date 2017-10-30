# chrome-debug
  A fork of [debug](https://github.com/visionmedia/debug) to support popular modules in chrome apps.
  
  This module is used by [chromiumify](https://github.com/chromiumify)
  
## Installation

```bash
$ npm install chrome-debug
```

## Usage 

This library can be used directly with your browserify builds with targeting Chrome Packaged Apps. 

```
$ browserify -r chrome-fs:fs index.js -o bundle.js
```

```
var debug = require('../../browser');
debug.enable('*')
var a = debug('worker:a');
var b = debug('worker:b');
setInterval(function(){
a('doing some work');
}, 1000);
setInterval(function(){
b('doing some work');
}, 1200);
```

## Examples 

See test/chome-app

## Authors
 - Anton Whalley
 - TJ Holowaychuk
 - Nathan Rajlich

## License

(The MIT License)

Copyright (c) 2014 TJ Holowaychuk &lt;tj@vision-media.ca&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
