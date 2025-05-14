### Tweeter | Single-Page Twitter Clone

A responsive microblogging platform demonstrating full-stack development skills

Key Features:
- 🐦 Interactive Tweet Composer

      Animated slide-down form with real-time character counter

      Client-side validation (140-character limit with error messaging)

      Loading states during API requests
  
- 🛡️ Secure Content Handling

      XSS protection with text sanitization

      Script injection prevention

- 📱 Fully Responsive Design

      Adaptive layout for desktop/tablet/mobile

      Hover states for tweet interactions (likes/flags)

Tech Stack: `HTML5` | `CSS3` | `JavaScript` | `jQuery` | `AJAX` | `Node.js` | `Express`| `Heroku`

Tweeter is a simple, single-page Twitter clone. [Hosted VIA Heroku](https://tweeter-chris.herokuapp.com/)

This was built to practice my HTML, CSS, JS, jQuery and AJAX front-end skills, and my Node, Express and back-end skills.
Some details about this project...
<ol>
  <li>Composing Tweets are hidden until the 'Write a new Tweet' down arrow is clicked, which then animatedly slides the composer into view.</li>
  <li>Everytime you submit a tweet, a profile will appear that 'tweets' that very message.</li>
  <ol>
    <li>Tweets are limited to 1-140 characters, with HTML coded error messages that appear if limits are invalidated.</li>
    <li>Characters are calculated on 'keyup' in real-time to keep the user updated about how many characters they have left.</li>
    <li>Composing a tweet features a temporary 'loading' class on the tweets to induce opacity while waiting for retrieval of tweets</li>
  </ol>
  <li>Profile picture is dependent on '/public/images/profile-hex.png' and can be replaced with the same name to replace the picture.</li>
  <li>Hovering over a 'tweet' will focus the 'tweet' and reveal the 'handle' and likes/retweet/report flags</li>
  <li>Secure:</li>
  <ol>
    <li>Tweets are prevent scripting. Scripts that try to empty out the database and the like, will be outputed as plain-text.</li>
  </ol>
  <li>MediaQuery:</li>
  <ol>
    <li>Product shifts to accomondate viewing from desktops, tablets, and mobiles.</li>
  </ol>
</ol>

## [Final Product](https://tweeter-chris.herokuapp.com/)

!["screenshot of desktop-view"](https://github.com/ChrisnNg/tweeter/blob/master/public/images/desktop-view.png?raw=true)
!["screenshot of tablet-view"](https://github.com/ChrisnNg/tweeter/blob/master/public/images/tablet-view.png?raw=true)
!["screenshot of mobile-view"](https://github.com/ChrisnNg/tweeter/blob/master/public/images/mobile-view.png?raw=true)

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm start` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
- Body-parser^1.15.2
- Chance ^1.0.2
- Md5 ^2.1.0
