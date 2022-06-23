var requestUrl = 'https://api.github.com/orgs/nodejs/repos';
var badRequestUrl = 'https://api.github.com/orgs/nodejddd/repad';


// you can check the fetch requests you make in the network tab of the chrome devtools
// can check the HTML status codes
// all types of useful information

fetch(requestUrl)
.then(response => response.json())
.then(data => {
    console.log(data);
});

fetch(badRequestUrl)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
});




// LOOK INTO HTTP RESPONSE STATUS CODES
// Very common interview question


// check the extention that formats the JSON in the chrome browser to look much more like an object

