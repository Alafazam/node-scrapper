var mkdirp = require('mkdirp');

mkdirp('foo',function (err) {
if (err) {console.log(err);};
console.log('done');
});