fetch('https://api.github.com/gists/public?since=2020-06-01&per_page=100')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });


// git contribution test
let gitContributionTest1;
let gitContributionTest2;
let gitContributionTest3;

