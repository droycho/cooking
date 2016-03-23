$(function(){
  var weight;
  var height;

  var bmi = function(weight, height) {
    var convertedWeight = weight*0.45;
    var convertedHeight = height*0.025;
    return ( convertedWeight/(Math.pow(convertedHeight,2)) );
  };

  var heightAndWeight= function() {
    weight= parseInt(prompt("what is your weight?"));
    height= parseInt(prompt("what is your height?"));
    alert("Your Body Mass Index is " + bmi(weight, height) + "%.");
  };

  $("h1").click(function(){
    alert("This is a standard header.");
  });

  $("p").click(function(){
    alert("This is a filler paragraph full of 'Loerm ipsum,' which is a made up language used to fill space.");
  });

  $(".bmi").click(function(){
    alert("We're going to calculate your Body Mass Index.")
  });

  $(".temp").click(function(){
    alert("We're going to convert from Farenheit to Cesius.")
  });

  $(".cook").click(function(){
    alert("We're going to convert Cooking Measurements.")
  });

  $(".math").click(function(){
    alert("We're going to use a Basic Calculator.")
  });

heightAndWeight();
});
