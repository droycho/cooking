var poundsToKilograms = function(number1) {
	return number1 * 0.453592;
};

var ounceToGram = function(number1) {
	return number1 * 28.3495;
};

var pintToLiter = function(number1) {
	return number1 * 0.473176;
};

var flozToMl = function(number1) {
	return number1 * 29.5735;
};

$(document).ready(function() {
  $("form#poundsToKilograms").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#pounds").val());
    var result = poundsToKilograms(number1) ;
    $("#outputKilos").text(result);
  });
  $("form#ounceToGram").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#ounces").val());
    var result = ounceToGram(number1);
    $("#outputGrams").text(result);
  });
  $("form#pintToLiter").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#pints").val());
    var result = pintToLiter(number1);
    $("#outputLiters").text(result);
  });
  $("form#flozToMl").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#floz").val());
    var result = flozToMl(number1);
    $("#outputMls").text(result);
  });
});
