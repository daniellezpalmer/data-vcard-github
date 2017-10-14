//Get document by querySelector from my HTML file
let container = document.querySelector('.container');
let container1 = document.querySelector('.container1');
let container2 = document.querySelector('.container2');
let container3 = document.querySelector('.container3');

fetch('https://api.github.com/users/daniellezpalmer')
.then(function(response) {
  return response.json()
}).catch(function(err) {
 console.log('error');
})
.then(function(data) {
  // console.log(data);
  console.log(data.name);
  header(data);
  basics(data);
  story(data);
  image(data);
})
