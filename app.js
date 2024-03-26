
// Permite acceder a cada uno de los elementos del DOM, en este caso el selector que usaremos para acceder es h1
// En este caso nos retornaria el elemento h1 que tenemos en el index.html, que seria el titulo
// El titulo se convierte en objeto ya que lo que entrega el queryselector es un objeto con muchos metodos para modificarlo
// let titulo = document.querySelector('h1');
// inserta el texto en el objeto titulo del selector h1
// titulo.innerHTML = 'Juego del número secreto';

// let parrafo = document.querySelector('p');
// parrafo.innerHTML = 'Indica un número del 1 al 10';

let numeroSecreto = 0;
let intentos = 0;
// lista de numeros que ya fueron sorteados,utilizados en el juego
let listaNumerosSorteados = [];
let numeroMaximo = 10;

// console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    // obtiene el objeto del DOM html del elemento con el selector que le enviamos por parametro
  let elementoHTML = document.querySelector(elemento);
  // inserta en el DOM html en el elemento que obtuvimos el texto que nos enviaron por parametro
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  // alert('Click desde el botón');
  // obtieene el valor del DOM html del elemento con el id=valorUsuario
  let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento('p', `Felicidades acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
    // obtieene el valor del DOM html del elemento con el id=reiniciar y remueve el atributo "disabled"
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    // EL usuario acertó.
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento('p', 'El número secreto es menor');
    }else{
      asignarTextoElemento('p', 'El número secreto es mayor');
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

function limpiarCaja() {
  // obtenemos el valor del elemento en el DOM html con el selectro id-#valorUsuario y lo reemplazamos con ''
  document.querySelector('#valorUsuario').value = '';
  // valorCaja.value = '';
}

//* generarNumeroSecreto()
function generarNumeroSecreto() {
  // let numeroSecreto = Math.floor(Math.random()*10);
  let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);
  // si ya sorteamos todos los números
  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
  } else {
    // si el numero generado está incluido en la lista
    // include metodo que verifica en un array si ya existe el objeto o dato que se le envia por parametro
    if (listaNumerosSorteados.includes(numeroGenerado)){
      return generarNumeroSecreto();
    }else{
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

//* condicionesIniciales()
// funcion que lanza las condiciones inicales del juego
function condicionesIniciales() {
  asignarTextoElemento('h1', 'Juego del número secreto!');
  asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo} por favor`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

//* reiniciarJuego()
function reiniciarJuego() {
  // Limpiar la caja
  limpiarCaja();
  // Indicar mensaje de intervalos de números
  // Generar el número aleatorio
  // Inicializar el número de intentos
  condicionesIniciales();
  // Deshabilitar el botón de nuevo juego
  document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();