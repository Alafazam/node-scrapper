$ = require('cheerio');
var http = require('http');
var sanitize = require("sanitize-filename");
var html = '';
var queue = require('./queue');
var Options = require('./options').Options;


http.globalAgent.maxSockets = 1;
counter = 0;
http.get(Options['link'], function(res) {
    res.on('data', function(data) {
        html += data;
    }).on('end', function() {
        // the whole of webpage data has been collected. parsing time!
        var title = $('title', html).text();
        var p = $(options['what_to_look_for'], options['inside'], html);
        arr = [];
        for (var i = 0; i < p.length; i++) {
            var heading = $('p>strong:first-child', p[i]).text();
            heading = heading.trim().replace(/:/g, '');
            if (heading) {
                console.log(heading);
                var links = $('p>a', p[i]).map(function(i, el) {
                    // this === el
                    return {
                        'heading': sanitize(heading),
                        'link': $(this).attr('href'),
                        'name': sanitize($(this).text())
                    };
                }).get();
                counter += links.length;
                arr = arr.concat(links);
                var start = beq(arr);
                // beq(links);
            };
        };

    });

}).on('error', function(e) {
    console.log("Got error: " + e.message);
}).end();;



// #wrapper#content#page div.page-content


function beq(links) {
    return new queue.Queue(links).begin();
}
