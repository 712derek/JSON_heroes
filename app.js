const header = document.querySelector("header");
const section = document.querySelector("section");

let requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

let request = new XMLHttpRequest();

request.open("GET", requestURL);

request.responseText = "json";
request.send();

request.onload = function () {
  const superHeroes = request.response;
  populateHeader(superHeroes);
  showHeroes(superHeroes);
};
