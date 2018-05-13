# Simple benchmark on some markdown parsers

As you can see in my `package.json` and `main.js`. I'm comparing

* [`commonmarkjs`](https://github.com/commonmark/commonmark.js): "^0.28.1",
* [`markdown-it`](https://github.com/markdown-it/markdown-it): "^8.4.1",
* [`markedjs`](https://github.com/markedjs/marked): "^0.3.19"

I made them render `sample*.md` files using only default options out of the box.

```
--./sample1.md--
markdown-it: 8.192ms
commonmark: 4.884ms
marked: 4.929ms
--
--./sample2.md--
markdown-it: 6.713ms
commonmark: 9.729ms
marked: 2.826ms
--
--./sample3.md--
markdown-it: 1.692ms
commonmark: 1.771ms
marked: 0.946ms
--
```

**Conclusion**

* [`markedjs`](https://github.com/markedjs/marked) is the fastest (in plus get many stars on github)

**Disclaimer**

* I used only default options which might not be the most optimize ones for the parsers.
* The test is executing with nodejs, the result might be greatly different on different browsers.
* The performance might not the only thing you should look at. For example: if you want to write a markdown editor, with a [preview panel capable of highlighting the current line you are editing](https://raw.githubusercontent.com/duongphuhiep/commonmark-editor/master/commonmark-editor-demo.gif), [`commonmark` can help you](https://github.com/duongphuhiep/commonmark-editor), [`markedjs` cannot](https://github.com/markedjs/marked/issues/1267) (at the moment of writing)
