"use strict";

// take in number from user input
// ensure that program doesn't crash if they enter something other than number

// convert number to roman numeral
// this should work both ways


function checkUserNumber(){
	while (true){
	var userNumber;
	userNumber = prompt("Enter a positive number to convert to Roman Numeral.");
	if(isNaN(userNumber) || (userNumber === "") || (userNumber <= 0)) {
	console.log("I said a positive NUMBER, fool!");
	}
	else {
	return(userNumber);
	}
	}
	}

	
function convertToRomanNumeral(userNumber){
	var romanNumber;
	romanNumber = ""
	var decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	var romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
	for (var i = 0; i < decimals.length; i++){
		while (userNumber >= decimals[i]){
		romanNumber += romans[i];
		userNumber -= decimals[i];
		}
	}
	console.log(romanNumber);
}

var decimals;
decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
var romans;
romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

var userNumber;
userNumber = checkUserNumber();
convertToRomanNumeral(userNumber);