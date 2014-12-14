var mkdirp = require('mkdirp');
var fs = require('fs');
$ = require('cheerio');
var http = require('http');

var options = {
    host: 'jquery.com',
    port: 80,
    path: '/'
};

var html = '';
http.get(options, function(res) {
    res.on('data', function(data) {
        // collect the data chunks to the variable named "html"
        html += data;
    }).on('end', function() {
        // $.load(html);
        // the whole of webpage data has been collected. parsing time!
        var title = $('title',html).text();
        mkdirp('/foo', function(err) { 
             fs.writeFile(''+title+'.txt',title, function (err) {
                if (err) throw err;
                console.log('It\'s saved! in same location.');
            });

        });
     });
});