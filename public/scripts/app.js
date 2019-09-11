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

    const header = $(`<header>`).text(`${name}`)
    const span = $(`<span class="handler">`).text(`${handle}`)
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

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];

  const renderTweets = function(tweets) {
    for (let tweet of tweets) {
      let newTweet = createTweetElement(tweet);
      $('#tweets-container').append(newTweet);
    }
  };

  renderTweets(data);

  const $tweet = $('#tweet');

  $tweet.on("submit", (evt) => {
    evt.preventDefault();
    
    $.ajax({
      method: "POST",
      url: "/tweets",
      data: $tweet.serialize()
    })
      .then(function(msg) {
        console.log("Data Saved" + msg);
      })
      .fail(err => {
        console.log(err);
      });
  });

});

