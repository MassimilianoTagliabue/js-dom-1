const lampElement = document.getElementById("lamp");
console.log(lampElement);

const btnElement = document.getElementById("lamp-btn")

console.log(btnElement);

btnElement.addEventListener("click", function (){
    
    lampElement.src = "./img/yellow_lamp.png";
    lampElement.alt = "lampada accesa";

    
    

    
})