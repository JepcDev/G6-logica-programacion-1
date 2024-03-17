
// Permite acceder a cada uno de los elementos del DOM, en este caso el selector que usaremos para acceder es h1
// En este caso nos retornaria el elemento h1 que tenemos en el index.html, que seria el titulo
// El titulo se convierte en objeto ya que lo que entrega el queryselector es un objeto con muchos metodos para modificarlo
// let titulo = document.querySelector('h1');
// inserta el texto en el objeto titulo del selector h1
// titulo.innerHTML = 'Juego del número secreto';

// let parrafo = document.querySelector('p');
// parrafo.innerHTML = 'Indica un número del 1 al 10';

let numeroSecreto = generarNumeroSecreto();

function asignarTextoElemento(elemento, texto){
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  // alert('Click desde el botón');
  let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento('p', 'Felicidades acertaste el número');
  } else {
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento('p', 'El número secreto es menor');
    }else{
      asignarTextoElemento('p', 'El número secreto es mayor');
    }
  }
  return;
}

function generarNumeroSecreto() {
  // let numeroSecreto = Math.floor(Math.random()*10);
  return Math.floor(Math.random()*10);
  // return numeroSecreto;
}

asignarTextoElemento('h1', 'Juego del número secreto!');
asignarTextoElemento('p', 'Indica un número del 1 al 10 por favor');