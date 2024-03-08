// Aqui declaro los posibles valores que puede tener un color hexadecimal, por ejemplo #f51a6c.
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// Aqui declaro las constantes de los elementos que voy a seleccionar, como nunca van a cambiar los delcaro como constantes
const btn = document.getElementById('btn');
const color = document.querySelector(".color");
const colorFleeper = document.querySelector(".color-fleeper");
// Declaro la funcion que me va a general el color hex aleatorio
function randomColor(){
    // Declaro la variable hexColor como una cadena de texto que siempre empiece por "#"
    let hexColor = "#";
    // Aqui le añado los 6 valores del color hexadecimal, con un for que haga el recorrido 6 veces para generar 6 numeros o letras aleatorio que estan
    // en la array "hex"
    for (let i = 0; i < 6; i++){
        // aqui le sumo el valor aleatorio a la cadena de texto que me da la funcion "getRandomNumber"
        hexColor += hex[getRandomNumber()]
    }
    
    // Cambio el texto de "color" para que se vea reflejado el nuevo valor que se le dio
    color.textContent = hexColor

    // Cambio el valor del backgroudColor de la etiqueta body del index.html por el valor nuevo generado de forma aleatoria
    // document.body.style.backgroundColor = hexColor;
    colorFleeper.style.backgroundColor = hexColor
}

// Aqui llamo al evento pulsando el boton
btn.addEventListener('click', randomColor);

// Declaro la funcion "getRandomNumber" que me genera un numero entero aleatorio entre el 0 y 14 que es la longitud del Array "hex"
function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}

// Fin de color fleeper
// -----------------------------------------------------------------------------------------------------
// Carta #2 Counter

const valueCounter = document.querySelector(".numCounter");
const btnsCounter = document.querySelectorAll(".btnCounter");
let numCounter = 0

btnsCounter.forEach(function(btnCounter){
    btnCounter.addEventListener("click", function(e){
        const btn = e.currentTarget.classList;
        if (btn.contains("increment")){
            numCounter++
        } else if(btn.contains("decrecent")){
            numCounter--
        } else {
            numCounter = 0
        }

        const counterBackground = document.querySelector(".counter")
        if(numCounter > 0){
            counterBackground.style.backgroundColor = "#16D89C"
        } else if(numCounter < 0){
            counterBackground.style.backgroundColor = "#F5063D"
        } else {
            counterBackground.style.backgroundColor = "#F1F5F8"
        }
        valueCounter.textContent = numCounter
        console.log(numCounter);
    })
})

// Fin Carta #2 Counter
// -----------------------------------------------------------------------------------------------------
// Carta #3 Calculadora

