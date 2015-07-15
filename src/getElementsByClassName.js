// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  var elements = [];

  function loop(main) {
  	do {
  		if (main.nodeType == 1) {
  			for (var i = 0; i < main.classList.length; i++) {
  				if (main.classList[i] == className) {
  					elements.push(main);
  				}
  			}
  		}
  		if(main.hasChildNodes())
  			loop(main.firstChild);
  	}
  	while (main = main.nextSibling);
  }

  loop(document);
  return elements;

};
