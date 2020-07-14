/* Browser detection
* Original from https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser
*/
/* Browsers incompatible with this JavaScript:
// Opera 7.0 and below
// Edge 19 and below
// Internet Explorer 5 and below
// Safari 2.0 and below
*/
// Start of script
// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
// Divider
// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';
// Divider
// Safari 3.0+ "[object HTMLElementConstructor]" 
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
// Divider
// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;
// Divider
// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;
// Divider
// Chrome 1 - 71
var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
// Divider
// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;
// Divider
var output = 'Detecting browsers by ducktyping:<hr>';
output += 'isFirefox: ' + isFirefox + '<br>';
output += 'isChrome: ' + isChrome + '<br>';
output += 'isSafari: ' + isSafari + '<br>';
output += 'isOpera: ' + isOpera + '<br>';
output += 'isIE: ' + isIE + '<br>';
output += 'isEdge: ' + isEdge + '<br>';
output += 'isBlink: ' + isBlink + '<br>';
document.body.innerHTML = output;
// Divider
// End of script
/* File info:
File type: *.js (JavaScript file)
File version: 1 (November 3rd 2019)
First version: 1 (November 3rd 2019)
Purpose: Detecting the browser the site is running on and optimizing the page for that browser
Line count: 49
*/