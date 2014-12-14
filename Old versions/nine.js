var async = require('async');
$ = require('cheerio');
var http = require('http');
var sanitize = require("sanitize-filename");
var html = '';
var queue = require('./queue');

http.globalAgent.maxSockets = 1;
counter = 0;
http.get('http://www.geeksforgeeks.org/data-structures/', function(res) {
    res.on('data', function(data) {
        html += data;
    }).on('end', function() {
        // the whole of webpage data has been collected. parsing time!
        var title = $('title', html).text();
        var para = $('p', '.page-content ', html).map(function(i, el) {
                // this === el
                return $(this);
            }).get();
        start = [];
        console.log(typeof para);

        async.each(para,function(item,callback) {
            var heading = $('p>strong:first-child', item).text();
            console.log(heading);
            var links = $('p>a', item).map(function(i, el) {
                // this === el
                // console.log(el);
                return {
                    'heading':sanitize(heading),
                    'link': $(this).attr('href'),
                    'name': sanitize($(this).text())
                };
            }).get();
            start.push(new queue.Queue(links).begin());
        },console.log('Done'));
    });
}).on('error', function(e) {
    console.log("Got error: " + e.message);
}).end();;



// #wrapper#content#page div.page-content
