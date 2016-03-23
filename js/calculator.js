var add = function(number1, number2) {
  return number1 + number2;
};
// alert(add(10,5));
// var number1 = prompt("Enter a number:");
// var number2 = prompt("Enter another number:");
// var result = add(number1, number2);
// alert(result);

var subtract = function(number1, number2) {
  return number1 - number2;
};

// number1 = prompt("Enter a number:");
// number2 = prompt("Enter another number:");
// result = subtract(number1, number2);
// alert(result);

var multiply = function(number1, number2) {
  return number1 * number2;
};

// number1 = prompt("Enter a number:");
// number2 = prompt("Enter another number:");
// result = multiply(number1, number2);
// alert(result);

var divide = function(number1, number2) {
  return number1 / number2;
};

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#outputadd").text(result);
  });
  $("form#subtract").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#subtract1").val());
    var number2 = parseInt($("#subtract2").val());
    var result = subtract(number1, number2);
    $("#outputsubtract").text(result);
  });
  $("form#multiply").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#multiply1").val());
    var number2 = parseInt($("#multiply2").val());
    var result = multiply(number1, number2);
    $("#outputmultiply").text(result);
  });
  $("form#divide").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#divide1").val());
    var number2 = parseInt($("#divide2").val());
    var result = divide(number1, number2);
    $("#outputdivide").text(result);
  });
});
