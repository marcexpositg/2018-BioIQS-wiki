var element = document.querySelector('[rel="stylesheet"]');
var stylesheet = element.sheet || element.styleSheet;
console.log(stylesheet);
stylesheet.disabled = true;