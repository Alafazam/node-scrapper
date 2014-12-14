$ = require('cheerio');
var mkdirp = require('mkdirp');
var fs = require('fs');
var beautify_html = require('js-beautify').html;


function saveFile (path,filename,fileText,fileType) {
	if (!fileType) {fileType='.text'};
	mkdirp(path,function (err) {
		filename=filename.trim();
        filename = filename.replace(/:/g, '')
        fs.writeFile(''+path +'/'+filename+"."+fileType,fileText, function (err) {
                if (err) throw err;
                // else return ''+filename+' is saved!.';
                console.log(''+filename+' is saved!.');
        });     
    });
};




exports.saveFile = saveFile;