$(document).ready(function() {
  // --- our code goes here ---
  const composeTweet = document.getElementById('composeTweet');

  function callback() {
    let isValid = true;
    const counter = $(this).parent().children("span.counter");
    count = $(this).val().length;
    counter.text(140 - count);

  }
  
  // Add listener
  composeTweet.addEventListener('keydown', callback);
});