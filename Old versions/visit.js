var http = require('http');
$ = require('cheerio');
var saveFile = require('./saveFile').saveFile;
var mkdirp = require('mkdirp');
var fs = require('fs');
var beautify_html = require('js-beautify').html;
var saveFile = require('./saveFile').saveFile;

Array.prototype.asyncEach = function(iterator) {
  var list = this,
      n    = list.length,
      i    = -1;

  var iterate = function() {
    i += 1;
    if (i === n) return;
    iterator(list[i], resume);
  };

  var resume = function() {
    setTimeout(iterate, 1);
  };
  resume();
};


function extract_post (path,link,name) {
	http.get(link, function(res) {
		html='';
	    res.on('data', function(data) {
	        html += data;
	    }).on('end', function() {

	        // the whole of webpage data has been collected. parsing time!
	        var post_title = $('h2.post-title',html).text();
	    	// console.log(post_title);
	        var post_content = $('.post-content',html).not('script').not('ins').text();
			post = {
				'post_title':name,
				'post_content':post_content
			}
			return save(path,post);
	    });
	});
};


function save (path,post) {
	return saveFile(path,post['post_title'],post['post_content'],'text');

}

function save_links (title,links) {

links.asyncEach(function(item, resume) {
	console.log(item);
	extract_post(title,item['link'],item['name']);
  resume();
});
	return true;
};

exports.save_links = save_links;

