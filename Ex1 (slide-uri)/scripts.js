
window.addEventListener('load',event => alert("Hello World!"));


const functionPlace = document.querySelector("#main");

window.addEventListener('load', event =>{
    functionPlace.innerHTML='Hello World!';
 });

 const button = document.querySelector("#button");
 const functionPlace2 = document.querySelector("#after-click");

 button.addEventListener("click", event => {
    functionPlace2.innerHTML='Hello World!';
 })