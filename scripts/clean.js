const sh = require('shelljs');
const upath = require('upath');

const destPath = upath.resolve(upath.dirname(__filename), '../zdist');

sh.rm('-rf', `${destPath}/*`)

