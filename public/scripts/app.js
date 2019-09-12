/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
  // --- our code goes here ---
  const createTweetElement = function(tweet) {
    const name = tweet['user']['name'];
    const avatar = tweet['user']['avatars'];
    const handle = tweet['user']['handle'];
    const content = tweet['content']['text'];
    const created_at = tweet['created_at'];
    const flags = `<i class="fas fa-flag"></i><i class="fas fa-retweet"></i><i class="fas fa-heart"></i>`;

    const header = $(`<header>`).text(`${name}`);
    const span = $(`<span class="handler">`).text(`${handle}`);
    const paragraph = $("<p>").text(`${content}`)
    const footer = $("<footer>").text(`${Math.round((Date.now() - new Date(created_at)) / (1000 * 60 * 60 * 24))} Days ago`)

    header.prepend(`<img src=${avatar} height="42" width="42">`)
    header.append(span)
    footer.append(flags)

    let newTweet = $('<article>')
      .append(header)
      .append(paragraph)
      .append(footer);
  
    return newTweet;
  };

  const renderTweets = function(tweets) {
    for (let tweet of tweets) {
      let newTweet = createTweetElement(tweet);
      $('#tweets-container').prepend(newTweet);
    }
  };

  const $tweet = $('#tweet');

  $tweet.on("submit", (evt) => {
    evt.preventDefault();

    const tweetLength = $("#tweet").children("textarea").val().length;
    $(".toggleError").hide();
    if (!tweetLength) {
      return $(".toggleError").text('⚠️Error: Tweet cannot be empty.⚠️').slideDown(800);
    }
    if (tweetLength > 140) {
      return $(".toggleError").text('😱Error: Tweet has exceeded the character limit.😱').slideDown(800);
    }

    $.ajax({
      method: "POST",
      url: "/tweets",
      data: $tweet.serialize()
    })
      .then(function() {
        $("#tweet").children("textarea").val("");
        $("#tweet").children(".counter").text(140);
        $("article").addClass("loading");
        loadTweets();
      })
      .fail(err => {
        console.log(err);
      });
  });

  const loadTweets = function() {
    $.ajax({
      method: "GET",
      url: "/tweets"
    })
      .then(function(data) {
        $("#tweets-container").empty();
        renderTweets(data);
        $("article").removeClass("loading");
      })
      .fail(err => {
        console.log(err);
      });
  };
  //load on page load
  loadTweets();

  $(".sliding-link").click(function(e) {
    e.preventDefault();
    let aid = $(this).attr("href");
    $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
    $("#tweet").slideToggle(800).focus();
    $("#tweet").children("textarea").focus();
  });

});