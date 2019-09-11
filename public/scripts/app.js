/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
  // --- our code goes here ---
  const createTweetElement = function(tweet) {
    let name = tweet['user']['name'];
    let avatar = tweet['user']['avatars'];
    let handle = tweet['user']['handle'];
    let content = tweet['content']['text'];
    let created_at = tweet['created_at'];

    return `<article> <header><img src=${avatar} height="42" width="42"> ${name} <span class="handler">${handle}</span></header>
    <p>${content}</p>
    <footer>${Math.round((Date.now() - new Date(created_at)) / (1000 * 60 * 60 * 24))} Days ago</footer>
    </article>`;
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
});

