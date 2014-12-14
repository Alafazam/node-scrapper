Array.prototype.asyncEach = function(iterator) {
    var list = this,
        n = list.length,
        i = -1;

    var iterate = function() {
        i += 1;
        if (i === n) return;
        iterator(list[i], resume);
    };

    var resume = function() {
        setTimeout(iterate, 100);
    };
    resume();
};
//code for sync for_loop




$ = require('cheerio');
var http = require('http');
var save_links = require('./visit').save_links;
var sanitize = require("sanitize-filename");
var saveFile = require('./saveFile').saveFile;
var html = '';
http.globalAgent.maxSockets = 1000;
var counter = 0;

http.get('http://www.geeksforgeeks.org/data-structures/', function(res) {
    res.on('data', function(data) {
        html += data;
    }).on('end', function() {
        // the whole of webpage data has been collected. parsing time!
        var title = $('title', html).text();
        var p = $('p', '.page-content ', html);
        //p contains all the p tags in the main page contents
        //for geekforgeeks each p tag contains links
        pages = [];
        for (var i = 0; i < p.length - 4; i++) {
            pages.push(p[i]);
        }
        //all links for level 2 pages are stored in a array

        pages.asyncEach(function(item, resume) {
            var heading = $('p>strong:first-child', item).text();
            var links = $('p>a', item).map(function(i, el) {
                // this === el
                return {'link':$(this).attr('href'),'name':sanitize($(this).text())};
            }).get();
            console.log(links);
            save_links('data-structures/' + heading, links);

            resume();
        });
        console.log('total files =' + counter);
        //sync for_loop implemtnaion which interates to next when one is finished


    });

}).on('error', function(e) {
    console.log("Got error: " + e.message);
});



// #wrapper#content#page div.page-content
