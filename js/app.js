$(document).ready(function(){

	var secretNo;
	var guessNo = parseInt($('#userGuess').val(), 10);
	var newGuess = parseInt(guessNo);
	var oldGuess = 0;
	var counter = 10;
	
	// Function to generate the random number
	function secretNum(min, max) {
		secretNo = Math.floor(Math.random() * (max - min + 1)) + min;
		return secretNo;
	}

	secretNo = secretNum(1, 100);
	console.log(secretNo);

	$('.new').on('click', newGame);

	// Function to implement a simple validation of the iser input
	function validation(guessNo) {
		if (guessNo % 1 !== 0)
		{
			alert('You must enter an integer value!!');
			$('#userGuess').val('');
			return false;
		}
		else if (guessNo < 1 || guessNo > 100) {
			alert('Please guess a number between 1 to 100!!');
			$('#userGuess').val('');
			return false;
		} 
		else {
			guessFeedback(secretNo, guessNo);
		}

		if (guessNo != '' && guessNo <= 100) {
            guessFeedback(secretNo, guessNo);
            counter--;
            guessHistory();
            $('#userGuess').val('');
        } else {
        	alert('Please guess a number between 1 to 100!!');
        	$('#userGuess').val('');
        }
        if (counter <= 0) {
        	$('#feedback').text('Game Over!');
        	document.getElementById("userGuess").disabled = true; 
			document.getElementById("guessButton").disabled = true;
			alert('The Secret number was ' + secretNo + ' ! Better luck next time !!');
        }      
        guessCounter(counter);
	}

	$('#guessButton').on('click', function() { // if variables are given as parameters, it doesn't work
		var guessNo = parseInt($('#userGuess').val(), 10);
		var newGuess = parseInt(guessNo);
		validation(guessNo); 
		if (oldGuess !== 0 && guessNo >= 1 && guessNo <= 100) {
				relativeFeedback(secretNo, oldGuess, newGuess);
			}
		oldGuess = newGuess;     
    });

    $('#userGuess').on('keypress', function(e){ // if variables are given as parameters, it doesn't work
    	var guessNo = parseInt($('#userGuess').val(), 10);
		var newGuess = parseInt(guessNo);
    	if (e.which == 13) {
    		validation(guessNo);
    		if (oldGuess !== 0 && guessNo >= 1 && guessNo <= 100) {
				relativeFeedback(secretNo, oldGuess, newGuess);
			}
    		oldGuess = newGuess;
    	}
    });

	// Display information modal box
  	$('.what').click(function(){
    	$('.overlay').fadeIn(1000);
  	});

  	// Hide information modal box
  	$('a.close').click(function(){
  		$('.overlay').fadeOut(1000);
  	});

});

// Function to start a new game
function newGame() {
	document.location.reload(true);
}

// Function to provide feedback to the user
function guessFeedback(secretNo, guessNo) {
	var difference = Math.abs(secretNo - guessNo);
	if (difference >= 50) {
		$('#feedback').text('Ice Cold!');
	} else if (difference >= 30 && difference <=49) {
		$('#feedback').text('Cold!');
	} else if (difference >= 20 && difference <=29) {
		$('#feedback').text('Warm!');
	} else if (difference >= 10 && difference <=19) {
		$('#feedback').text('Hot!');
	} else if (difference >= 1 && difference <=9) {
		$('#feedback').text('Very Hot!!');
	} else {
		$('#feedback').text('Bingo! You got it right!!');
		document.getElementById("userGuess").disabled = true; 
		document.getElementById("guessButton").disabled = true;
	}
}

// Function to provide relative feedback to the user
function relativeFeedback(secretNo, oldGuess, newGuess) {
	var oldDiff = parseInt(Math.abs(secretNo - oldGuess));
	var newDiff = parseInt(Math.abs(secretNo - newGuess));
	if (newDiff > oldDiff) {
		$('#relative-feedback').text('You are colder than the last guess!');
	} else if (newDiff == oldDiff) {
		$('#relative-feedback').text('You are as far as your previous guess!');
	} else {
		$('#relative-feedback').text('You are hotter than the last guess!');
	}
}

// Function to count the number of guesses
function guessCounter(counter) {
	$('#count').text(counter);
}

// Function to show the history of guesses
function guessHistory() {
	$('#guessList').append('<li>' + parseInt($('#userGuess').val(), 10) + '</li>');
}


