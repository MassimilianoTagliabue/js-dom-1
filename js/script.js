
//assegno a lampElement l'elemento con l'id lamp
const lampElement = document.getElementById("lamp");

//assegno a btnElement l'elemento con l'id lamp-btn
const btnElement = document.getElementById("lamp-btn")





btnElement.addEventListener("click", function () {

    
    //controllo se l'immagine ha la classe white
    if (lampElement.classList.contains("white")) {

        lampElement.classList.add("yellow"); //aggiungo la classe yellow
        lampElement.classList.remove("white");  //rimuovo la classe white

        lampElement.src = "./img/yellow_lamp.png"; //metto l'immagine della lampada accesa
        lampElement.alt = "lampada accesa";

       

    } else {

        lampElement.classList.add("white");     //aggiungo la classe white
        lampElement.classList.remove("yellow"); //rimuovo la classe yellow

        lampElement.src = "./img/white_lamp.png";   //metto l'immagine della lampada spenta
        lampElement.alt = "lampada spenta";


    }



})




