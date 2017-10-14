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

function header(data){
  // let data = JSON.parse(this.responseText);
  let string = '';
  string += `<h1>${data.name}</h1>`
  container.innerHTML = string;
}

function basics(data){
  // let data = JSON.parse(this.responseText);
  let string1 = '';
  string1 += `<dl><dt>Name:</dt> <dd>${data.name}</dd>
             <dt>GitHub URL:</dt> <dd><a href="http://www.piilossa.com/"> ${data.html_url}</a></dd>
             <dt>Email:</dt> <dd>daniellezpalmer@gmail.com</dd>
             <dt>Company:</dt> <dd>${data.company}</dd>
             <dt>Website:</dt> <dd><a href="http://www.piilossa.com/"> ${data.blog}</a></dd></dl>`
  container1.innerHTML = string1;
}

function story(data) {
  // let data = JSON.parse(this.responseText);
  let string2 = '';
  string2 += `<p>${data.bio}</p>`
  container2.innerHTML = string2;
}
