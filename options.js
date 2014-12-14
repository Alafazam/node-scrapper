/* 
options are used in main.js  
options for files are used inside queue.js

link is the url where you want to search for
it will grap all the ['inside'] text from page 
It will divide it into different part of ['what_to_look_for']
then grab all the links and search inside them
for each link it will collect all text and again take ['inside'] and 
take all the contents of ['what_to_look_for'] and save it with apropriate heading
*/





var Options = {
    'link': 'http://www.geeksforgeeks.org/fundamentals-of-algorithms/',
    'what_to_look_for': 'p',
    'inside': '.page-content '
};


var Options_for_files = {
    'path': 'crawled/algorithms/',
    'what_to_look_for': 'p',
    'inside': '.post-content '
};


module.exports.Options = options;
module.exports.Options_for_files = Options_for_files;
