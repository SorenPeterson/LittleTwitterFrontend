var displayHomePage = function() {
  var request = new XMLHttpRequest();
  request.open("GET", 'http://localhost:3000');
  request.onload = function() {
    var response = JSON.parse(this.response);
    console.log(response)
    console.log(response.most_popular_hashtags);
    console.log(response.)
  }
  request.send();
}

displayHomePage();

