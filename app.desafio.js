// Resolución del desafío 1
// Saber cómo usar funciones es uno de los conceptos fundamentales en la programación y el desarrollo de software. Las funciones desempeñan un papel crucial en la organización, modularización y reutilización del código.

// Con eso en mente, hemos creado una lista de actividades (opcionales) centradas en la práctica para mejorar aún más tu experiencia de aprendizaje.

// Sugestión de respuestas

//------------ 2.Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: Hora del Desafío.

// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Hora del Desafío';

//------------ 3.Crea una función que muestre en la consola el mensaje El botón fue clicado siempre que se presione el botón Console.

// En el index.html , agregamos en el onclick el siguiente código:

// {/* <button onclick="mostarMensajeEnLaConsola()" class="button">Console</button> */}

// En el app.js

// function mostarMensajeEnLaConsola() {
//     console.log('El botón fue clicado!')
// }

//--------------- 4.Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".

// En el index.html , agregamos en el onclick el siguiente código:
// {/* <button onclick="mostrarAlerta()" class="button">Alert</button> */}

// En el app.js
// function mostrarAlerta() {
//     let ciudad = prompt("Por favor, ingresa el nombre de una ciudad de Brasil:");
//     alert("Estuve en " + ciudad + " y me acordé de ti.");
// }
//-------------- 5.Crea una función que muestre una alerta con el mensaje: "Amo JS" siempre que se presione el botón "Alerta".

// En el index.html , agregamos en el onclick el siguiente código:
// {/* <button onclick="mostarAlerta()" class="button">Alert</button> */}

// En el app.js
// function mostarAlerta(){
//     alert("AMO JS");
// }
//-------------- 6.Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.

// En el index.html , agregamos en el onclick el siguiente código:
// {/* <button onclick="sumaDosNumeros()" class="button">Suma</button> */}

// En el app.js
// function sumaDosNumeros(){
//     let primerNumero = parseInt(prompt('Digite el primer numero'));
//     let segunNumero = parseInt(prompt('Digite el segundo numero'));
//     let resultado = primerNumero + segunNumero;
//     alert('${primerNumero} + ${segunNumero} = ${resultado}');
// }

// Crear una función que muestra "¡Hola, mundo!" en la consola.
// function mostrarHola() {
//   console.log("¡Hola, mundo!");
// }
// mostrarHola();

// Crear una función que recibe un nombre como parámetro y muestra "¡Hola, [nombre]!" en la consola.
// function mostrarHolaNombre(nombre) {
//   console.log(`¡Hola, ${nombre}!`);
// }
// mostrarHolaNombre("Alice");

// Crear una función que recibe un número como parámetro y devuelve el doble de ese número.
// function calcularDoble(numero) {
//   return numero * 2;
// }
// let resultadoDoble = calcularDoble(5);
// console.log(resultadoDoble);

// Crear una función que recibe tres números como parámetros y devuelve su promedio.
// function calcularPromedio(a, b, c) {
  // return (a + b + c) / 3;
// }
// let promedio = calcularPromedio(4, 7, 10);
// console.log(promedio);

// Crear una función que recibe dos números como parámetros y devuelve el mayor de ellos.
// function encontrarMayor(a, b) {
  // return a > b ? a : b;
// }
// let numeroMayor = encontrarMayor(15, 9);
// console.log(numeroMayor);

// Crear una función que recibe un número como parámetro y devuelve el resultado de multiplicar ese número por sí mismo.
// function cuadrado(numero) {
//   return numero * numero;
// }
// let resultado = cuadrado(2);
// console.log(resultado);


// 1.Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
// function calcularIMC(altura, peso) {
//   var imc = peso / (altura * altura);
//   return imc;
// }

// 2.Crea una función que calcule el valor del factorial de un número pasado como parámetro.
// function calcularFactorial(numero) {
//   if (numero === 0 || numero === 1) {
//     return 1;
//   } else {
//     return numero * calcularFactorial(numero - 1);
//   }
// }
// // Ejemplo de uso
// let numero = 5;
// let resultado = calcularFactorial(numero);
// console.log(`El factorial de ${numero} es ${resultado}`);

// 3.Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales. Para esto, considera la cotización del dólar igual a R$4,80.
// function convertirDolaresAReales(dolares) {
//   var cotizacionDolar = 4.80;
//   var reales = dolares * cotizacionDolar;
//   return reales;
// }
// // Ejemplo de uso
// let valorEnDolar = 50;
// let valorEnReales = convertirDolaresAReales(valorEnDolar);
// console.log(`${valorEnDolar} dólares  es R$ ${valorEnReales}`);

// 4.Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
// function calcularAreaYPerimetroRectangular(altura, anchura) {
//   var area = altura * anchura;
//   var perimetro = 2 * (altura + anchura);
//   console.log("Área: " + area);
//   console.log("Perímetro: " + perimetro);
// }
// // Ejemplo de uso
// let altura = 3; // en metros
// let anchura = 5; // en metros
// calcularAreaYPerimetroRectangular(altura, anchura);

// 5.Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
// function calcularAreaYPerimetroCircular(radio) {
//   var pi = 3.14;
//   var area = pi * radio * radio;
//   var perimetro = 2 * pi * radio;
//   console.log("Área: " + area);
//   console.log("Perímetro: " + perimetro);
// }
// // Ejemplo de uso
// let radio = 4; // en metros
// calcularAreaYPerimetroCircular(radio);

// 6.Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
// function mostrarTablaDeMultiplicar(numero) {
//   for (var i = 1; i <= 10; i++) {
//     var resultado = numero * i;
//     console.log(numero + " x " + i + " = " + resultado);
//   }
// }
// // Ejemplo de uso
// let numero = 7;
// mostrarTablaDeMultiplicar(numero);
