var events = require('events');
var mkdirp = require('mkdirp');
var fs = require('fs');


function File(path, filename, fileText, fileType) {

    this.path = path;
    this.filename = filename;
    this.fileText = fileText;
    this.fileType = fileType;
    events.EventEmitter.call(this);

    this.saved = function() {
        this.emit('saved');
    }

    this.queued = function() {
        this.emit('queued');
    }

}

File.prototype.__proto__ = events.EventEmitter.prototype;

File.prototype.saveFile = function (callback) {
	mkdirp(path,function (err) {
		filename=filename.trim();
        filename = filename.replace(/:/g, '')
        fs.writeFile(''+path +'/'+filename+"."+fileType,fileText, function (err) {
                if (err) throw err;
                this.saved();
                callback();
        });     
    });
};