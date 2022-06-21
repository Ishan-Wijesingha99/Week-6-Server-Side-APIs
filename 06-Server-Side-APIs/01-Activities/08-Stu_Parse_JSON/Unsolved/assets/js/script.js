// TODO: Edit the URL to get only 5 issues of Twitter's Chill repo
var requestUrl = 'https://api.github.com/repos/twitter/chill/issues?per_page=5';

// We can change the web API URL to only include certain amounts of information.
// So for instance, we might not want the ENTIRE JSON object, we might only want a part of it. We can change the URL a bit to only fetch the part we want 

// this is called query params , look into it


fetch(requestUrl)
.then(response => response.json())
.then(data => {
    console.log('Github Repo Issues \n----------');
    console.log(data);

    data.forEach(function(object) {
      console.log(`${object.url}`)
      console.log(`${object.user.login}`)
    })
  });
