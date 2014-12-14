var events = require('events');
var mkdirp = require('mkdirp');
var fs = require('fs');

Link.queue = [];
Link.head = 0;

function Link(heading, name, link) {

    this.heading = heading;
    this.name = name;
    this.link = link;
    this.post_title='';
    this.post_content = '';
    events.EventEmitter.call(this);

    Link.head++;
    Link.queue[Link.head]=this;

    this.saved = function() {
        this.emit('saved');
    };
    this.gotIt = function (data) {
        this.emit('gotIt',data);
    }
    this.on('gotIt',function (data) {
        this.saveFile();
        Link.next();
    });


}

Link.prototype.__proto__ = events.EventEmitter.prototype;

Link.prototype.next = function() {
if(Link.queue.length>Link.head)
{Link.head++;}else{this.emit('gotIt')}

Link.fetch();
};

Link.prototype.saveFile = function(callback) {
    mkdirp(path, function(err) {
        filename = filename.trim();
        filename = filename.replace(/:/g, '')
        fs.writeFile('seven' + this.heading + '/' + this.name + "." + '.txt', this.post_content, function(err) {
            if (err) throw err;
            this.saved();
            callback();
        });
    });
};


Link.prototype.fetch = function() {
    this = Link.queue[Link.head];
    html = '';
    var req = http.request(Link.queue[Link.head]['link'], function(res) {
        res.on('data', function(data) {
            html += data;
        });

        res.on('end', function() {
        this.post_content = html;
        this.gotIt(post_content);    
        });
    });
    req.end();
}


module.exports.Link = Link;