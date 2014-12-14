$ = require('cheerio');
var http = require('http');
var save_links = require('./visit').save_links;
var sanitize = require("sanitize-filename");
var saveFile = require('./saveFile').saveFile;
var html = '';
var Link = require('./link');
links = [];

var req = http.request('http://www.geeksforgeeks.org/fundamentals-of-algorithms/', function(res) {
    res.on('data', function(data) {
        html += data;
    });

    res.on('end', function(html, save_links) {
        console.log('data recieved');

        var p = $('p', '.page-content ', html);
        console.log(p);
        for (var i = 0; i < p.length - 4; i++) {
            var heading = $('p>strong:first-child', p[i]).text();
            // .trim().replace(/:/g, '');
            if (heading) {
                console.log(heading);
                $('p>a', p[i]).each(function(b, a) {
                    var link = new Links(heading, sanitize($(a).html()), $(a).attr('href'));
                    link.fetch();
                });
            };

        };
    });
});

req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
});

// save_links('algo/' + heading, links);





// save_links = function(links) {
//     fetch_save(links.length, links);
// }

// fetch_save = function(i, links) {
//     text = '';
//     post = {};
//     html = '';
//     var req = http.request(links[i]['link'], function(res) {
//         res.on('data', function(data) {
//             html += data;
//         })

//         res.on('end', function() {
//             var post_title = $('h2.post-title', html).text();
//             var post_content = $('.post-content', html).not('script').not('ins').text();
//             post = {
//                 'post_title': name,
//                 'post_content': post_content
//             };

//         });
//     });
//     req.end();
// }
