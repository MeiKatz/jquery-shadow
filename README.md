jQuery Shadow Root
=============

```javascript
// returns a shadow root object if the selector match one element only
// and no callback function is passed
var shadow = $( "body" ).shadow();

// you can also pass options for applyAuthorStyles and resetStyleInheritance
var shadow = $( "body" ).shadow({
  "applyAuthorStyles" : true,
  "resetStyleInheritance" : true
});

// returns the selected elements
var $els = $( "div" ).shadow();

// for multiple elements (or one) use the callback function instead
$( "div#shadow" ).shadow( function ( shadow ) {
  // do something with it
});

```
