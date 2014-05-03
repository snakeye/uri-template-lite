[1]: https://secure.travis-ci.org/litejs/uri-template-lite.png
[2]: https://travis-ci.org/litejs/uri-template-lite
[3]: https://coveralls.io/repos/litejs/uri-template-lite/badge.png
[4]: https://coveralls.io/r/litejs/uri-template-lite
[7]: https://ci.testling.com/litejs/uri-template-lite.png
[8]: https://ci.testling.com/litejs/uri-template-lite
[rfc-6570]: http://tools.ietf.org/html/rfc6570
[npm-package]: https://npmjs.org/package/uri-template-lite


    @version    0.1.4
    @date       2014-05-03
    @stability  2 - Unstable



URI Template &ndash; [![Build][1]][2] [![Coverage][3]][4]
============

URI Template [RFC 6570][rfc-6570] implementation in less than 1kb.



Installation
------------

To use it in the browser, include uri-template-min.js in your site

```html
<script src=uri-template-min.js></script>
```

In node.js: `npm install uri-template-lite`

```javascript
var URI = require("uri-template-lite").URI
```



Usage
-----

```javascript
var data = {"domain":"example.com", "user":"fred", "query":"mycelium"}
URI.expand("http://{domain}/~{user}/foo{?query,number}", data)
// http://example.com/~fred/foo?query=mycelium
```



About error handling
--------------------

This implementation tries to do a best effort template expansion 
and leaves erroneous expressions in the returned URI 
instead of throwing errors.
So for example, the incorrect expression 
{unclosed will return {unclosed as output.



Browser Support
---------------

[![browser support][7]][8]

-   For older browsers it requires `browser-upgrade-lite` package 
    or other ES5 polyfill.
-   FF3-4 `escape` should be patched to remove non-standard 2nd param, 
    `browser-upgrade-lite` does that.



External links
--------------

-   [npm-package][]
-   [rfc-6570][]



### Licence

Copyright (c) 2014 Lauri Rooden &lt;lauri@rooden.ee&gt;  
[The MIT License](http://lauri.rooden.ee/mit-license.txt)




