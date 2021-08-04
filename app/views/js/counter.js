var countDownDate = new Date("Sep 2, 2021 00:59:01").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = round(Math.floor(distance / (1000 * 60 * 60 * 24)));
  var hours = round(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  var minutes = round(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
  var seconds = round(Math.floor((distance % (1000 * 60)) / 1000));
  
  // Display the result in the element with id="demo"
  $('#days').empty().append(days);
  $('#hours').empty().append(hours);
  $('#minutes').empty().append(minutes);
  $('#seconds').empty().append(seconds);


  //   document.getElementById("demo").innerHTML = days + " " + hours + " "
//   + minutes + " " + seconds + " ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

var round = function(e){
    if(e < 10){
        e = '0' + e;
    }
    return e;
}