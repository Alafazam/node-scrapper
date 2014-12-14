$ = require('cheerio');
var http = require('http');
var save_links = require('./visit').save_links;
var sanitize = require("sanitize-filename");
var saveFile = require('./saveFile').saveFile;
var html = '';
http.globalAgent.maxSockets = 1;
counter = 0;
http.get('http://www.geeksforgeeks.org/data-structures/', function(res) {
    res.on('data', function(data) {
        html += data;
    }).on('end', function() {
        // the whole of webpage data has been collected. parsing time!
        var title = $('title', html).text();
        var p = $('p', '.page-content ', html);

        for (var i = 0; i < p.length - 4; i++) {
            var heading = $('p>strong:first-child', p[i]).text();
            heading = heading.trim().replace(/:/g, '');

            if (heading) {
                console.log(heading);

                var links = $('p>a', p[i]).map(function(i, el) {
                    // this === el
                    return {
                        'link': $(this).attr('href'),
                        'name': sanitize($(this).text())
                    };
                }).get();
                counter += links.length;

                // save_links('algo/' + heading, links);
            };
         console.log(counter);
        };

    });

}).on('error', function(e) {
    console.log("Got error: " + e.message);
}).end();;



// #wrapper#content#page div.page-content
