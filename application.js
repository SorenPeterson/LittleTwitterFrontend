var displayHomePage = function() {
  var request = new XMLHttpRequest();
  request.open("GET", 'http://localhost:3000');
  request.onload = function() {
    var response = JSON.parse(this.response);
    displayHashtags(response.most_popular_hashtags);
    displayTweets(response.most_recent_tweets);
  }
  request.send();
}

var displayHashtags = function(response) {
  var display = document.getElementById("hashtag-display");
  var template = document.getElementById("hashtag-template").innerHTML;
  response.forEach(function(hashtag) {
    var listItem = document.createElement('li');
    listItem.innerHTML = Mustache.render(template, hashtag);
    display.appendChild(listItem);
  });
}

var displayTweets = function(response, clear) {
  var display = document.getElementById("tweet-display");
  display.innerHTML = '';
  response.forEach(function(tweet) {
    var listItem = document.createElement('li');
    listItem.innerHTML = tweet.tweet
    display.appendChild(listItem);
  });
}

var createTweet = function(form) {
  var request = new XMLHttpRequest();
  request.open("POST", 'http://localhost:3000/tweets?' + $(form).serialize(), true);
  request.onload = function() {
    var response = JSON.parse(this.response);
    displayTweets(response);
  }
  request.send();
}

var searchHashtag = function(form) {
  var request = new XMLHttpRequest();
  request.open("GET", 'http://localhost:3000/hashtags/search?' + $(form).serialize(), true);
  request.onload = function() {
    var response = JSON.parse(this.response);
    searchbox = document.getElementById("search-bar");
    if(!response.error) {
      displayTweets(response.tweets);
    } else {
      searchbox.style.border = "2px solid #FF0000";
      searchbox.placeholder = "Invalid Search";
    }
    searchbox.value = '';
  }
  request.send();
}

displayHomePage();

