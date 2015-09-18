$(document).ready(function(){

	// Variables created for the random number and the user's guess number.

	var secretNo;
	var counter = 0;
	

	// Function to generate the random number.

	function secretNum(min, max) {
		secretNo = Math.floor(Math.random() * (max - min + 1)) + min;
		return secretNo;
	}

	secretNo = secretNum(1, 100);
	console.log(secretNo); // Works fine even if the function is outside document ready

	$('.new').on('click', newGame);

	// $('#guessButton').on('click', guessFeedback(secretNo, guessNo));
	$('#guessButton').on('click', function () {
		var guessNo = $('#userGuess').val();
		if (guessNo != '') {
            guessFeedback(secretNo, guessNo);
            counter++;
            guessHistory();
        } else {
        	alert('Please guess a number between 1 to 100!!');
        }        
        guessCounter(counter);       
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
	}
}

function guessCounter(counter) {
	$('#count').text(counter);
}

function guessHistory() {
	$('#guessList').append('<li>' + $('#userGuess').val() + '</li>');
}

	





