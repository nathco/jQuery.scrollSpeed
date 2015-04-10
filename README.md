# jQuery.scrollSpeed
Lightweight jQuery extension for modifying scrolling speed in modern web browsers. Supports vertical or horizontal scrolling direction, including user-defined easing.

## Installation
Include the latest version of [jQuery](http://jquery.com/download) and `jQuery.scrollSpeed.js` in the `<head>` of your HTML document:
```html
<script src="jQuery.min.js"></script>  
<script src="jQuery.scrollSpeed.js"></script>
```
## How to Use
Reference the `scrollSpeed()` method and modify the `step` and `speed` parameters to create the desired scrolling effect. The `step` parameter defaults to `100` units, while `speed` defaults to `800` milliseconds; custom easing is optional. See the live demo: [code.nath.co/scrollSpeed](http://code.nath.co/scrollSpeed)

```javascript
$(function() {  

    // Default
    jQuery.scrollSpeed(100, 800);
    
    // Custom Easing
    jQuery.scrollSpeed(100, 800, 'easeOutCubic');
    
});
```  

## Browser Support
– Google Chrome  
– Safari ( Desktop )  
– Internet Explorer ( Disabled for performance )  
– Firefox  
– Opera ( Not Tested )  

## Release Notes
**jQuery.scrollSpeed 1.0**   
– Initial Release   
**jQuery.scrollSpeed 1.0.1**      
– Added support for horizontal scrolling   
– Minor code cleanup  
**jQuery.scrollSpeed 1.0.2**      
– Added paramater for custom easing  

## Feedback
If you discover any issues or have questions regarding usage, please send a message to [code@nath.co](mailto:code@nath.co) or find me on GitHub [@nathco](https://github.com/nathco).