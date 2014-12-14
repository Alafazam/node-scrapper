var events = require('events'),
    mkdirp = require('mkdirp'),
    fs = require('fs'),
    http = require('http'),
    Options = require('./options').Options_for_files;


function Queue(queue) {

    this.queue = queue;
    this.head = 0;
    events.EventEmitter.call(this);
    this.save = queue.length;

    this.saved = function() {
        this.emit('saved');

    };


    this.on('gotIt', function(data) {
        this.next();
        this.saveFile(data, this.head);
    });

    this.gotIt = function(data) {
        this.emit('gotIt', data);
    }

    // this.on('next', function(argument) {
    //     this.next();
    // });

    this.begin = function(argument) {
        this.emit('begin');
    }

    this.once('begin', function(argument) {
        this.fetch();
    });

    this.on('saved', function() {
        this.save--;
        if (save == 0) {
            this.removeAllListeners('next', console.log('all saved'));
        };
    })

}


Queue.prototype.__proto__ = events.EventEmitter.prototype;

Queue.prototype.next = function() {
    if (this.head < this.queue.length - 1) {
        this.head++;
        this.fetch();
    } else {
        return
    };
};


Queue.prototype.saveFile = function(data, i) {
    q = this;
    el = this.queue[i];
    // // console.log(el);
    if (typeof el['heading'] === "undefined") {
        return;
    }
    if ((q.queue.length - q.head)) {
        var path = options['path'] + el['heading'];
        var filename = el['name'].trim();
        filename = filename.replace(/:/g, '')
        mkdirp(path, function(err) {
            fs.writeFile('' + path + '/' + filename + '.text', data, function(err) {
                if (err) throw err;
                console.log('' + el['name'] + ' is saved!.');
                q.saved();
            });
        });
    };
};


Queue.prototype.fetch = function() {
    q = this;
    el = this.queue[this.head];
    html = '';
    if (!el) {
        return q.next;
    }
    var req = http.request(el['link'], function(res) {
        res.on('data', function(data) {
            html += data;
        });

        res.on('end', function() {
            var p = $(options['what_to_look_for'], options['inside'], html).text();
            console.log(q.queue.length - q.head);
            if ((q.queue.length - q.head)) {
                q.gotIt(p);
            }
        });
    });
    req.end();
}


exports.Queue = Queue;
