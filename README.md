# iframe boxer

This is the opposite of frame unboxers that break a page out of being within a frame. 
This forces the page to be a frame within another page.

## Install

```
npm install --save TODONAME
```

## Usage

### CommonJS

```javascript
const iframeBoxer = require('iframe-boxer');

iframeBoxer({hostLocation: 'http://example.com/the/host/page'});

```

### AMD

```javascript
define(['iframe-boxer', function(iframeBoxer) {  
    iframeBoxer({hostLocation: 'http://example.com/the/host/page'});
});
```

### Global

```html
<script src="assets/iframe-boxer/lib/index.js"></script>
<script>
  window.iframeBoxer({hostLocation: 'http://example.com/the/host/page'});
</script>
```

## Options

### hostLocation

The `hostLocation` is the URL you want the page to be framed within.
This is the simplest option where you want the frame to only be hosted
within a specific page.

### redirectLocation

The `redirectLocation` is the URL you want the redirect the top frame to
when the page is not hosted within the correct page. It defaults to
`hostLocation`. The `redirectLocation` is typically used with `matcher`
when you want more than the simple functionality that `hostLocation`
gives you.

If `redirectLocation` is a function, it will be invoked with:

* The hosting URL
* The current page location
* The options to passed to `iframeBoxer`

The return value should be the URL to redirect to.

### matcher

The `matcher` will be used to check if the host URL is a valid host URL.
It defaults to `hostLocation`. The `matcher` can be one of the following:

* A string of the URL.
* A regular expression to match against.
* A function that returns `true` if it is a valid host URL. It is passed hosting URL, current page location, and the options. 