// Write a function called 'tripleFive' which loops three times using a for loop. Each iteration of the loop, output 'Five!' using console.log.

var tripleFive = function() {
	for(var i = 0; i < 3; i++)
	{
		console.log("Five!");
	}
};

tripleFive();

// Write a function called 'lastLetter' which takes a single string argument and returns the last character in the string.

var lastLetter = function(s) {
	return s.charAt(s.length-1);
};

console.log(lastLetter("Live by love"));

// Write a function called 'square' which takes a single argument which is a number, and returns number * number.

var square = function(num) {
	return num * num;
};

console.log(square(3));
console.log(square(5));

// Write a function called 'negate' which takes a single number argument and returns the negative of that number.

var negate = function(num) {
	return num * (-1);
};

console.log(negate(5));
console.log(negate(-8));

// Write a function called 'toArray' which takes three arguments and returns an array with each of those arguments as items.

var toArray = function(a,b,c) {
	return [a,b,c];
}

console.log(toArray(1,4,5));
console.log(toArray(8,9,10));



















