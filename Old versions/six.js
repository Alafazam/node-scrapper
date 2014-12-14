$ = require('cheerio');
var http = require('http');
var sanitize = require("sanitize-filename");
var saveFile = require('./saveFile').saveFile;
var html = '';
http.globalAgent.maxSockets = 1;

http.get('http://www.geeksforgeeks.org/fundamentals-of-algorithms/', function(res) {
    res.on('data', function(data) {
        html += data;
    }).on('end', function() {
            // the whole of webpage data has been collected. parsing time!
            var title = $('title',html).text();
            var p = $('p','.page-content ',html);

            

            links = [];
            for (var i =  0; i < p.length - 4; i++) {
                var heading = $('p>strong:first-child',p[i]).text();
                    heading = heading.trim().replace(/:/g, '');      
                if (heading) {
                    console.log(heading);
                    $('p>a',p[i]).each(function (b,a) {
                        links.push({
                                'heading':heading,
                                'link':$(a).attr('href'),
                                'name':sanitize($(a).html())
                                });
                            });
                };

            };
        var p = 0;
        var t = setInterval(function (p) {
            if(p<links.length){
                // save_links('algo/' + heading, links);
                extract_post('six/' + links[p]['headin'],links[p]['link'],links[p]['name']);
                p++;
            }else{
                clearInterval(t);
            }
        },20);                    
                


    });

}).on('error', function(e) {
  console.log("Got error: " + e.message);
});;



// #wrapper#content#page div.page-content







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