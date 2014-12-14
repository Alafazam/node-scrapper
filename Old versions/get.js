$ = require('cheerio');
var mkdirp = require('mkdirp');
var fs = require('fs');
var http = require('http');



html= '';
http.get("http://www.geeksforgeeks.org/fundamentals-of-algorithms/", function(res) {
	res.on('data', function(data) {
	        html += data;
	    }).on('end', function() {
	        // the whole of webpage data has been collected. parsing time!
	        var title = $('title',html).text();
	        console.log(title);
	        mkdirp('foo',function (err) {
	            
	            fs.writeFile('foo/'+title+'.js',html, function (err) {
	                    if (err) throw err;
	                    console.log('It\'s saved!.');
	            });
	        });
    	});
		
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});