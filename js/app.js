$(document).ready(function(){

	/*var secretNo;
	var guessNo;

	function secretNum(min, max) {
		var min = 1,
			max = 100;
		var secret = Math.floor(Math.random() * (max - min + 1)) + min;
		return secret;
		console.log('secret');
	}

	secretNum(1, 100);*/

	
	/*--- Display information modal box ---*/
  	$('.what').click(function(){
    	$('.overlay').fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$('a.close').click(function(){
  		$('.overlay').fadeOut(1000);
  	});

  	$('.new').on('click', newGame);

});


function newGame() {
	document.location.reload(true);
	//secretNum();
}