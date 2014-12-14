$ = require('cheerio');
var http = require('http');
var saveFile = require('./saveFile').saveFile;

var html = '';
http.get("http://www.geeksforgeeks.org/fundamentals-of-algorithms/", function(res) {
    res.on('data', function(data) {
        html += data;
    }).on('end', function() {
            // the whole of webpage data has been collected. parsing time!
            var title = $('title',html).text();
            var p = $('p','.page-content ',html);
            for (var i =  0; i < p.length - 4; i++) {
                var heading = $('p>strong:first-child',p[i]).text();
                if (heading) {
                    heading = heading.trim();
                    // heading = heading.replace(/\s+/g, '');
                    console.log(heading);
                    alinks = [];
                    text = $('p>a',p[i]).each(function (b,a) {
                        alinks.push($(a).html()+'\t:\t'+$(a).attr('href') +'\n');
                            });
                    alinks = alinks.join('\n');
                    heading = heading.replace(/:/g, '')
                    saveFile('algo',heading,alinks,'text');
                };

            };

    });

}).on('error', function(e) {
  console.log("Got error: " + e.message);
});;



// #wrapper#content#page div.page-content