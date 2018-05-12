# Simple benchmark on some markdown parsers

As you can see in my `package.json` and `main.js`. I'm comparing

* [`commonmarkjs`](https://github.com/commonmark/commonmark.js): "^0.28.1",
* [`markdown-it`](https://github.com/markdown-it/markdown-it): "^8.4.1",
* [`markedjs`](https://github.com/markedjs/marked): "^0.3.19"

I made them render `sample*.md` files using only default options out of the box.

**Conclusion**

* [`markedjs`](https://github.com/markedjs/marked) is the fastest: nearly 2x faster than the others two (no wonder it got far more stars on github).
* `commonmarkjs` is slightly faster than `markdown-it`.

**Disclaimer**

* I used only default options which might not be the most optimize ones for the parsers.
* The performance might not the only thing you should look at. For example: if you want to write a markdown editor, with a [preview panel capable of highlighting the current line you are editing](https://raw.githubusercontent.com/duongphuhiep/commonmark-editor/master/commonmark-editor-demo.gif), [`commonmark` can help you](https://github.com/duongphuhiep/commonmark-editor), [`markedjs` cannot](https://github.com/markedjs/marked/issues/1267) (at the moment of writing)
