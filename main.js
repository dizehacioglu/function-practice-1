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
};

console.log(toArray(1,4,5));
console.log(toArray(8,9,10));

// Write a function called 'startsWithA' which takes a single string argument and returns true if the given string's first letter is 'A' and false otherwise.

var startsWithA = function(s) {
	return s.toUpperCase().charAt(0) === "A";
};

console.log(startsWithA("aardvark"));
console.log(startsWithA("bear"));

// Write a function called 'excite' which takes a single string argument and returns the given string plus three exclamation marks.

var excite = function(s) {
	return s + "!!!";
};

console.log(excite("yes"));
console.log(excite("go"));

// Write a function called 'sun' which takes a single string argument and returns true if the string contains the word 'sun' within it.

var sun = function(s) {
	return s.indexOf("sun") != -1;
};

console.log(sun("sundries"));
console.log(sun("asunder"));
console.log(sun("catapult"));

// Write a function called 'tiny' which takes a single number argument and returns true if the number is between 0 and 1.

var tiny = function(num) {
	return num > 0 && num < 1;
};

console.log(tiny(0.3));
console.log(tiny(14));
console.log(tiny(-5));

// Write a function called 'getSeconds' which takes a single string argument in the format 'MM:SS' (minutes, and seconds) and returns the total number of seconds represented by that timespan.

var getSeconds = function(time) {
	var nums = time.split(":");
	return (parseInt(nums[0]) * 60) + parseInt(nums[1]);
};

console.log(getSeconds("01:30"));
console.log(getSeconds("10:25"));















