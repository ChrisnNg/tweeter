$(document).ready(function() {
  // --- our code goes here ---
  const composeTweet = document.getElementById('composeTweet');

  const callback = function() {
    const counter = $(this).parent().children("span.counter");
    let count = $(this).val().length;

    if (counter.text() < 0) {
      counter.css('color', 'red')
    }
    if (counter.text() > 0) {
      counter.css('color', 'black')
    }
    return counter.text(140 - count);
  };
  
  // Add listener
  composeTweet.addEventListener('keyup', callback);
});