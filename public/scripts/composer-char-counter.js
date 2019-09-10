$(document).ready(function() {
  // --- our code goes here ---
  const composeTweet = document.getElementById('composeTweet');

  function callback() {
    const counter = $(this).parent().children("span.counter");
    count = $(this).val().length;
    counter.text(140 - count);
    if (counter.text() < 0) {
      counter.css('color', 'red')
    }
    if (counter.text() > 0) {
      counter.css('color', 'black')
    }
  }
  
  // Add listener
  composeTweet.addEventListener('keyup', callback);
});