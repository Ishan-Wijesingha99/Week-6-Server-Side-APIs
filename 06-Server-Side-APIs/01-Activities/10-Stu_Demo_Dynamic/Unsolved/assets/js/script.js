var userContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  var requestUrl = 'https://api.github.com/users?per_page=5';

  fetch(requestUrl)
  .then(response => response.json())
  .then(data => {
      // Use the console to examine the response
      console.log(data);

      // TODO: Loop through the data and generate your HTML
      data.forEach(function(object, i) {
        userContainer.insertAdjacentHTML('afterend', 
        `<h2 class="h2-${i}">${object.login}</h2>
        <p class="p-${i}">${object.url}</p>`
        )
      })
    });
}
fetchButton.addEventListener('click', getApi);
