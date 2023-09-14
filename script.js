let intentos = 6;
let diccionario = ['APPLE', 'HURLS', 'WINGS', 'YOUTH'];
const palabra = diccionario[Math.floor(Math.random() * diccionario.length)];

const input = document.getElementById("guess-input");
const button = document.getElementById("guess-button");
const GRID = document.getElementById("grid");
const intentosRestantes = document.getElementById("intentos");
const renewButton = document.getElementById("renew-button");

const ROW = document.createElement('div');
ROW.className = 'row';

button.addEventListener("click", intentar);

function intentar(){
    const INTENTO = leerIntento();

    intentos--

    for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (INTENTO[i]===palabra[i]){ //VERDE
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#79b851';
        } else if( palabra.includes(INTENTO[i]) ) { //AMARILLO
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#f3c237';
        } else {      //GRIS
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#a4aec4';
        }
        ROW.appendChild(SPAN)
    }
    GRID.appendChild(ROW)
    ROW.appendChild(document.createElement('br'))

    if (intentos==0){
        mostrarBoton();
        terminar("PIERDE")
    }

    if (INTENTO === palabra ) {
        mostrarBoton();
        terminar("GANA")
        return
    }

    intentosRestantes.innerHTML = intentos;
}

function leerIntento(){
    let intento = input.value;
    intento = intento.toUpperCase();
    console.log(intento)
    if (intento.length < 5 || intento.length > 5){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'La palabra debe tener ' + palabra.length + ' letras',
        })
        return
    } 
    return intento;
}

function terminar(mensaje){
    const INPUT = input;
    INPUT.disabled = true;
    button.disabled = true;
    //let contenedor = document.getElementById('guesses');
    //contenedor.innerHTML = mensaje;

    if(mensaje == "GANA"){
        Swal.fire({
            title: '👑 ¡Ganaste! 🤩',
            text: '¡Eres lo mejor!',
            imageUrl: 'https://img.freepik.com/foto-gratis/equipo-espanol-sosteniendo-trofeo-mundial_23-2150742279.jpg?w=1380&t=st=1694701069~exp=1694701669~hmac=5788fe2c1f7710521886a65a67300d41598a2430144440bd293f92103a7d5c0b',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Imagen Ganador',
        })
    } else {
        Swal.fire({
            title: '¡Perdiste! 😓',
            text: 'Intentalo en la proxima 🙂',
            imageUrl: 'https://img.freepik.com/foto-gratis/retrato-mujer-agarrando-cabeza-escritorio-cerca-computadora-portatil_1163-2126.jpg?w=1060&t=st=1694701113~exp=1694701713~hmac=b33904eef4b48d23d8617d9b1ef6ba6df2d1fbe301bca9b1e96181020a9fd5ab',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Imagen perdida',
        })
    }
}

function mostrarBoton() {
    renewButton.classList.remove('d-none');
    renewButton.classList.add('d-block');
}

renewButton.addEventListener("click", function(){
    location.reload();
})