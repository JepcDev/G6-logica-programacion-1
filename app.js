// funcio nativa para mostrar un mensaje pop pup
// alert('Hola Mundo');
alert("¡Bienvenida y bievenido a nuestro sitio web!");

// Funcion o metodo SPermite perdirle o preguntar informacion al usuario
let numeroSecreto = 6;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = 'vez';

while (numeroUsuario != numeroSecreto){
  let numeroUsuario = prompt("Me indicas un numero entre 1 y 10 por favor: ");
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
    alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${palabraVeces}`);
    intentos = 1;
    palabraVeces ='vez';
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
    palabraVeces = 'veces';
    intentos = intentos + 1;
  }

  // if (edad >= 18) {
  //   alert("¡Puedes obtener tu licencia de conducir!");
  // } else {
  // }
}