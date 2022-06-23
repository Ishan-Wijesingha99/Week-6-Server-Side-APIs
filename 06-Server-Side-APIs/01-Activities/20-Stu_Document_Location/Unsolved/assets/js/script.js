var badRequestUrl = 'https://api.github.com/unicorns';
var redirectUrl = './404.html';



// HOW TO DO A WEBPAGE REDIRECT

fetch(badRequestUrl).then(response => {

  // check if response.status is 404, if not, return the response object as usual
  if(response.status !== 404) {
    return response.json()
  } else {
    // if response.status is 404, change the url using document.location.href
    // you can literally set this URL to anything
    document.location.href = './404.html'
  }

});
