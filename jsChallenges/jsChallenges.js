// convert celcius to fahrenheit
function convertToF(celsius) {
	var fahrenheit;
	fahrenheit = celsius * 9/5 + 32;
	return fahrenheit;
}

convertToF(0);

// figure out golf score
function golfScore(par, strokes) {
	if (strokes == 1) {
		return "Hole-in-one!";
	} else if (strokes <= par - 2) {
		return "Eagle";
	} else if (strokes == par - 1 ) {
		return "Birdie";
	} else if (strokes == par) {
		return "Par";
	} else if (strokes == par + 1) {
		return "Bogey";
	} else if (strokes == par + 2) {
		return "Double Bogey";
	} else if (strokes >= par + 3) {
		return "Go Home!";
	}
}
golfScore(5, 4);

// blackjack card counter
var count = 0;

function cc(card) {
	if (card <= 6) {
	  count++;
	} else if (card <= 9) {
	  count += 0;
	} else {
	  count--;
	}
	if (count <= 0){
	  return count + " Hold"; 
	} else {
	  return count + " Bet"; 
	}

}

cc(2); cc(3); cc(7); cc('K'); cc('A');

// reverse string using built-in methods
function reverseString(str) {
  var splitString = str.split("");
  var reversed = splitString.reverse();
  var joined = reversed.join("");
    
  return joined;
}

reverseString("Greetings from Earth");

// Reverse a String With a Decrementing For Loop

function reverseString(str) {
    var newString = "";

    for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i];
    }
    return newString;
}
 
reverseString('hello');

// Factorialize a Number
function factorialize(num) {
  if (num === 0) {
    return 1;
  } 
  return num * factorialize(num - 1);
}

factorialize(5);