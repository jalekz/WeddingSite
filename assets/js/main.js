$(document).ready(function(){
	$("#heart-loader").delay(1500).fadeOut("slow");
	CounterDown();
});

function CounterDown() {
	// Set the date we're counting down to
	var countDownDate = new Date("Oct 25, 2019 19:00:00").getTime();

	// Update the count down every 1 second
	var x = setInterval(function() {

	  // Get today's date and time
	  var now = new Date().getTime();
	    
	  // Find the distance between now and the count down date
	  var distance = countDownDate - now;
	    
	  // Time calculations for days, hours, minutes and seconds
	  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	    
	  // Output the result in an element with id="demo"
	  $("#counter").html(days + "d " + hours + "h "
	  + minutes + "m " + seconds + "s ");
	    
	  // If the count down is over, write some text 
	  if (distance < 0) {
	    clearInterval(x);
	    document.getElementById("demo").innerHTML = "EXPIRED";
	  }
	}, 1000);

}