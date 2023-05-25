// Total de preguntas del juego
const TOTAL_PREGUNTAS = 10;
//variables para controlar el tiempo
const timer = document.getElementById("tiempo");
//tiempo del juego en segundos
const TIEMPO_DEL_JUEGO = 60;
//variable que indica el tiempo restante
let tiempoRestante = TIEMPO_DEL_JUEGO;
//variable que maneja el contador
var countdown;

// creamos las letras de la A a la J de forma circular

const container = document.querySelector(".container");
for (let i=1; i <= TOTAL_PREGUNTAS; i++){
    const circle = document.createElement("div");
    circle.classList.add("circle");
    circle.textContent = String.fromCharCode(i + 96);
    circle.id = String.fromCharCode(i + 96);
    container.appendChild(circle);

    const angle = ((i - 1) / TOTAL_PREGUNTAS) * Math.PI * 2 - (Math.PI / 2);
    const x = Math.round(95 + 120 * Math.cos(angle));
    const y = Math.round(95 + 120 * Math.sin(angle));
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
}

//boton comenzar

let comenzar = document.getElementById("comenzar");
comenzar.addEventListener("click", function(event) {
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display ="block";

    //largamos el tiempo
    iniciarContador();
})

function iniciarContador() {
    countdown = setInterval(()=>{

        //restar un segundo al tiempo restante
        tiempoRestante--;

        //actualizamos el texto del cronometro con el tiempo restante
        timer.innerText = tiempoRestante;

        //si el tiempo llega a 0, detener el cronometro
        if(tiempoRestante<0){
        clearInterval(countdown);
        alert("se acabo el tiempo");
        //mostrar pantalla final();
        

        }
    }, 1000);
}
 

