var fs = require('fs');
var marked = require('marked');
var mdit = require('markdown-it')();
var commonmark = require('commonmark');

var sourcePath = "./sample3.md";

var p = new Promise((resolve, reject) => {

  fs.readFile(sourcePath, 'utf8', (err, fileContent) => {
    if (err) {
      reject(err);
    }

    console.time("markdown-it");
    var result = mdit.render(fileContent);
    console.timeEnd("markdown-it");

    console.time("marked");
    var lexed = marked.lexer(fileContent);
    var parsed = marked.parser(lexed);
    console.timeEnd("marked");

    console.time("commonmark");
    var reader = new commonmark.Parser();
    var writer = new commonmark.HtmlRenderer();
    var parsed = reader.parse(fileContent);
    var result = writer.render(parsed);
    console.timeEnd("commonmark");

    resolve(0);
  });
})

p.then(function () {
  console.log('--');
}).catch(console.error);
