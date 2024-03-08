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
// Carta #3 Objetos Casas

const reviewCasa = [
    {
        id: 1,
        img: "img/casa_1.jpg",
        title: "Casa numero 1",
        metrosCuadrados: "400",
        numHabitaciones: "7",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla saepe officiis cumque et deleniti quasi numquam, libero magnam quia quo voluptatibus similique, delectus soluta placeat velit quidem minima, maiores illum?"
    },
    {
        id: 2,
        img: "img/casa_2.jpg",
        title: "Casa numero 2",
        metrosCuadrados: "200",
        numHabitaciones: "4",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid possimus aut aspernatur deleniti, quod autem nihil ratione sunt in sed."
    },
    {
        id: 3,
        img: "img/casa_3.jpeg",
        title: "Casa numero 3",
        metrosCuadrados: "150",
        numHabitaciones: "5",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur repudiandae veniam quae placeat deleniti dolorem."
    }   
]

const imgCasa = document.getElementById("casaImg");
const titleCasa = document.querySelector(".titleCasa");
const metrosCuadrados = document.querySelector(".metros-cuadrados");
const numHabitaciones = document.querySelector(".habitaciones");
const descCasa = document.querySelector(".descCasa");

// const btnCasaR = document.querySelector(".btn-casa-r");
// const btnCasaL = document.querySelector(".btn-casa-l");

const btnCasaR = document.getElementById("btnCasaL");
const btnCasaL = document.getElementById("btnCasaR");
let currentId = 0;

window.addEventListener("load", function(){
    currentId = Math.floor(Math.random() * reviewCasa.length);
    showItem(currentId);
})

function showItem(currentItem){
    const item = reviewCasa[currentItem];
    // console.log(currentId)
    imgCasa.src = item.img;
    titleCasa.textContent = item.title;
    metrosCuadrados.textContent = item.metrosCuadrados;
    numHabitaciones.textContent = item.numHabitaciones;
    descCasa.textContent = item.desc;
}

btnCasaR.addEventListener("click", function(){
    // console.log("log");
    currentId++;
    if(currentId > reviewCasa.length - 1){
        currentId = 0;
    }
    showItem(currentId)
})

btnCasaL.addEventListener("click", function(){
    currentId--;
    if(currentId < 0){
        currentId = reviewCasa.length - 1
    }
    showItem(currentId)
})