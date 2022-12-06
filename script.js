let h1 =document.querySelector("h1");
let input =document.querySelector("input");
let button =document.querySelector("button");

button.addEventListener("click", function(){
    h1.innerHTML = input.value;
});



