// funcio nativa para mostrar un mensaje pop pup
// alert('Hola Mundo');
alert("¡Bienvenida y bievenido a nuestro sitio web!");

let numeroMaximoPosible = 10;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
// let palabraVeces = 'vez';
let maximoIntentos = 3;

// console.log(numeroSecreto);

while (numeroUsuario != numeroSecreto){
  // Funcion o metodo Permite perdirle o preguntar informacion al usuario
  let numeroUsuario = parseInt( prompt(`Me indicas un numero entre 1 y ${numeroMaximoPosible} por favor: `));
  // let nombre = "Luna";
  // let edad = 25;
  // let numeroDeVentas = 50;
  // let saldoDisponible = 100;
  // let mensajeDeError  = "¡Error! Completa todos los campos";

  // alert("¡Error! Completa todos los campos");
  // alert(mensajeDeError);

  // nombre = prompt("Por favor ingrese su nombre: ");
  // edad = prompt("Por favor ingrese su edad: ");

  // Funcion que impreime en consola el valor de variables f12
  // sin las comillas la consola entiende que tiene que extraer el valor de la variable y mostrarlo
  console.log(numeroUsuario);

  // Realiza la comparacion
  if (numeroUsuario == numeroSecreto) {
    // Acertamos fue verdadera la condición
    // alert('Acertaste el número');
    alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    intentos = 1;
    numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
    // palabraVeces ='vez';
  }else{
    // La condición no se cumplió
    // alert('Lo siento, no acertaste el número');
    // alert(`Lo siento, no acertaste el número: ${numeroUsuario}`);
    if (numeroUsuario > numeroSecreto) {
      alert('El número secreto es menor');
    }else{
      alert('El número secreto es mayor');
    }
    // Incrementamos el contador cuando no acierta.
    // intentos = intentos + 1;
    // intentos +=1;
    intentos++;
    // palabraVeces = 'veces';
    if (intentos > maximoIntentos) {
      alert(`Llegaste al número máximo de ${maximoIntentos} intentos`);
      break;
    }
  }

  // if (edad >= 18) {
  //   alert("¡Puedes obtener tu licencia de conducir!");
  // } else {
  // }
}