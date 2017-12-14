//Variables

//Crystals
var crystal = {
	purple:
	{
		name: "purple",
		value: 0 
	},
	black:
	{
		name: "black",
		value: 0 
	},
	green:
	{
		name: "green",
		value: 0 
	},
	red:
	{
		name: "red",
		value: 0 
	},
};

//Score Variables
var currentScore = 0;
var targetScore = 0;

//Win/Loss Variables
var winCount = 0;
var lossCount = 0;

//Functions


//random generator
var getRandom = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Start/Reset Game
var startGame = function() {

	currentScore = 0;

	targetScore = getRandom(19, 120);

	crystal.purple.value = getRandom(1, 12);
	crystal.black.value = getRandom(1, 12);
	crystal.green.value = getRandom(1, 12);
	crystal.red.value = getRandom(1, 12);

	console.log("Target Score: " + targetScore);
	console.log("Purple: " + crystal.purple.value + " | Black: " + crystal.black.value + " | Green: " + crystal.green.value + " | RED: " + crystal.red.value)

	$("#currentScore").html(currentScore);
	$("#targetScore").html(targetScore);

}

//Crystal Clicks
var addValues = function(crystal) {
	currentScore = currentScore + crystal.value;
	$("#currentScore").html(currentScore);
	checkWin();
}

//Checks if person won/lost then reset
var checkWin = function() {

	if(currentScore > targetScore) {
		alert("You Lost!");
		console.log("You Lost!");
		lossCount++;
		$("#losses").html(lossCount);
		startGame();

	}

	else if(currentScore === targetScore) {
		alert("You Won!");
		console.log("You Won!");
		winCount++;
		$("#wins").html(winCount);
		startGame();
	}

}



//Main Process

startGame();

$("#purple").click(function() {
	addValues(crystal.purple);
});

$("#black").click(function() {
	addValues(crystal.black);
});

$("#green").click(function() {
	addValues(crystal.green);
});

$("#red").click(function() {
	addValues(crystal.red);
});
