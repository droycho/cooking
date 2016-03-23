var celsiusToFarenheit = function() {
	var input = parseInt(prompt("what is the temperature in degrees celsius?"));
	var output = (input * 1.8) + 32;
  alert("The temperature in Farenheit is " + output + "degrees");
};

var farenheitToCelsius = function() {
	var input = parseInt(prompt("what is the temperature in degrees farenheit?"));
  var output = ((input - 32)/1.8);
  alert("The temperature in Celsius is " + output + " degrees");
};

celsiusToFarenheit();
farenheitToCelsius();
