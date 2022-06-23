
// deliberately create wrong URL 
var badRequestUrl = 'https://yeet.github.com/orgs/nodejs/oreps?per_page=5';

var responseText = document.getElementById('response-text');


function getApi(request) {
  fetch(request)
  .then(response => {
    
      if(response.status !== 200) {
        responseText.textContent = response.status
      }
      return response.json()
  })
  .then(data => {
      console.log(data);
  });
}

getApi(badRequestUrl);
