var http = require('http');
$ = require('cheerio');
var sanitize = require("sanitize-filename");


var options = {
  host: 'www.geeksforgeeks.org',
  path: '/fundamentals-of-algorithms/'
};

callback = function(response) {
            

  var str = '';

  //another chunk of data has been recieved, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
  });

  //the whole response has been recieved, so we just print it out here
  response.on('end', function () {

  });
}

http.request(options, callback).end();






