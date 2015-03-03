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
  response.forEach(function(hashtag) {
    var listItem = document.createElement('li');
    listItem.innerHTML = hashtag.hashtag
    display.appendChild(listItem);
  });
}

var displayTweets = function(response) {
  var display = document.getElementById("tweet-display");
  response.forEach(function(tweet) {
    var listItem = document.createElement('li');
    listItem.innerHTML = tweet.tweet
    display.appendChild(listItem);
  });
}

displayHomePage();

