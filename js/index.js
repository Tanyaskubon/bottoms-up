const API_CALLSTRING = "https://api.punkapi.com/v2/beers/random";


var btnTest = document.querySelector("#btnPull");

function getBeers() {
    fetch(API_CALLSTRING)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            //populate beers
            console.log(data);
        });
}
btnTest.addEventListener("click", getBeers);