const baseURL = "https://api.edamam.com/search"
const appID = "07e276da"
const key = "27961816403e06fe693fae2233e0127b"
let url;

const submitBtn = document.querySelector('.submit');
const searchTerm = document.querySelector('.search');
const section = document.getElementById('food');
const searchForm = document.querySelector('form');


searchForm.addEventListener('submit', fetchResults);


function fetchResults(event) {
    event.preventDefault();
    
url= baseURL + '?q=' + searchTerm.value + '&app_id=' + appID + '&app_key=' + key 

    fetch(url)
    .then(function(result){
        // console.log(result.json());
        return result.json()
    })
    .then(function(json) {
        displayResults(json);
    });
    
}

function displayResults(json) {
//     let recipes = results.json.hits;
// }
let recipes = json.hits;
console.log(recipes)
// while (section.firstChild) {
//     section.removeChild(section.firstChild);
// } if(recipes.length === 10){
//     nav.style.display = 'block';
// } else {
//     nav.style.display = 'none';
// }
if(recipes.length === 0){
    console.log('No results');
} else {
    for(let i=0; i < recipes.length; i++){
        let image = document.createElement('img');
        let link = document.createElement('a');
        let clearfix = document.createElement('div');
        
        let current = recipes[i].recipe;
        console.log(current)
        
        clearfix.setAttribute('class','clearfix');
        image.setAttribute('class', 'foodImage');
        link.setAttribute('class', 'foodName')
        
        section.appendChild(image);
        section.appendChild(link);
        
        link.textContent = current.label
        link.href= current.url
        image.src = current.image

        // recipes.appendChild(clearfix);
        // recipes.appendChild(image);
        // recipes.appendChild(header);
        // header.appendChild(link);
    }}
}