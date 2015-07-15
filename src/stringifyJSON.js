// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  var str = "";

  if (obj == undefined || obj == null){
  	return "null";
  }

  if (Array.isArray(obj)) {
  	str = str.concat("[");
  	_.each(obj, function(item, index, arr) {
  		if (index != arr.length - 1) {
  			str = str.concat(stringifyJSON(item), ",");
  		}
  		else {
  			str = str.concat(stringifyJSON(item));
  		}
  	});
  	str = str.concat("]");
  	return str;
  }

  else if (typeof(obj) == "object") {
  	str = str.concat("{");
  	var keys = Object.keys(obj);

  	_.each(obj, function(value, key, list) {
  		if (key !== undefined && value !== undefined && typeof(key) != "function"
  			 && typeof(value) != "function") {
  			if (key == keys[keys.length-1]) {
  				str = str.concat(stringifyJSON(key), ":", stringifyJSON(value));
  			}
  			else str = str.concat(stringifyJSON(key), ":", stringifyJSON(value), ",");
  		}
  	});
  	str = str.concat("}");
  	return str;
  }

  if (typeof(obj) == "string") {
  	str = str.concat("\"",obj,"\"");
  	return str;
  }

  str = str.concat(obj);
  return str;
};
