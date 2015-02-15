# jQuery.scrollSpeed
Lightweight jQuery extension for modifying vertical scrolling speed in modern web browsers.

## Installation
Include the latest version of [jQuery](http://jquery.com/download) and `jQuery.scrollSpeed.js` in the `<head>` of your HTML document:
```html
<script src="jQuery.min.js"></script>  
<script src="jQuery.scrollSpeed.js"></script>
```
## How to Use
Reference the `scrollSpeed()` method and modify the `step` and `speed` parameters to create the desired scrolling effect. The `step` parameter defaults to `120` units, while `speed` defaults to `400` milliseconds. Check out the live demo: [code.bynathan.com/scrollSpeed](http://code.bynathan.com/scrollSpeed)

```javascript
$(function() {  

    jQuery.scrollSpeed(120, 400);
    
});
```  

## Browser Support
– Google Chrome  
– Safari ( Desktop )  
– Internet Explorer ( Disabled for performance )  
– Firefox  
– Opera ( Not Tested )

## Feedback
If you discover any issues or have questions regarding usage, please send a message to [mail@bynathan.com](mailto:mail@bynathan.com) or find me on twitter [@ByNathan](http://twitter.com/ByNathan).