$(document).ready(function(){

	var secretNo;
	var guessNo;

	function secretNum(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	console.log(secretNum(1, 100)); // Works fine even if the function is outside document ready

	
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
	secretNum();
}