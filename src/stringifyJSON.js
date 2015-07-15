// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  var str = "";

  if (Array.isArray(obj)) {
  	if (obj.length == 0) {
  		return "[]";
  	}
  	str.concat(_.each(obj, function(item) {
  		stringifyJSON(item);
  	}));
  	return str;
  }

  if (typeof(obj) == "string") {
  	return str.concat("\"",obj,"\"");
  }

  return str.concat(obj);
};
