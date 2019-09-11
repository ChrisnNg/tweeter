$(document).ready(function() {
  // --- our code goes here ---
  const tweet = $("article");
  const handler = $(".handler");

  function callback() {
    handler.css('visibility', 'visible')
  }
  
  function exit() {
    handler.css('visibility', 'hidden')
  }
  // Add listener
  tweet.hover(callback, exit);
});