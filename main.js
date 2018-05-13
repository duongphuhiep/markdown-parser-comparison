var fs = require('fs');
var marked = require('marked');
var mdit = require('markdown-it')();
var commonmark = require('commonmark');

[1, 2, 3].forEach(i => {
  var sourcePath = "./sample" + i + ".md";
  var fileContent = fs.readFileSync(sourcePath, 'utf8');

  console.log('--' + sourcePath + '--');

  console.time("markdown-it");
  var result = mdit.render(fileContent);
  console.timeEnd("markdown-it");

  console.time("commonmark");
  var reader = new commonmark.Parser();
  var writer = new commonmark.HtmlRenderer();
  var parsed = reader.parse(fileContent);
  var result = writer.render(parsed);
  console.timeEnd("commonmark");

  console.time("marked");
  var lexed = marked.lexer(fileContent);
  var parsed = marked.parser(lexed);
  console.timeEnd("marked");

  console.log('--');
});
