$ = require('cheerio');
var mkdirp = require('mkdirp');
var beautify_html = require('js-beautify').html
var fs = require('fs');
var http = require('http');

var options = {
    host: 'alafazam.com',
    port: 80,
    path: '/'
};

var html = '';
http.get(options, function(res) {
    res.on('data', function(data) {
        html += data;
    }).on('end', function() {
        // the whole of webpage data has been collected. parsing time!
        var title = $('title',html).text();
        var string = ''+beautify_html(html);
        mkdirp('/foo', function(err) { 
             fs.writeFile(''+title+'.html',string, function (err) {
                if (err) throw err;
                console.log('It\'s saved! in same location.');
            });

        });
     });
});