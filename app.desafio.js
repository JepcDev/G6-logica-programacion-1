// # Resolución de los desafíos del curso de lógica de programación <h1>

// Practicar la lógica de programación, incluyendo conceptos como variables, condiciones (if-else), bucles (while) e interacciones con el usuario (alert, prompt), es esencial para tu carrera en el desarrollo de software. Estos fundamentos son la base para abordar problemas de manera estructurada, tomar decisiones sin código, crear bucles controlados e interactuar de manera efectiva con los usuarios.

// Comprender estos conceptos no solo facilita el aprendizaje de nuevos lenguajes y tecnologías, sino que también te capacita para crear soluciones innovadoras, depurar de manera eficiente y mantener la calidad a lo largo del ciclo de vida del software. Por lo tanto, invertir tiempo en estos principios desde temprano es fundamental para construir una base sólida y exitosa en el campo de la programación.

// ## Desafíos - Respuestas <h2>

// 1. Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". En caso contrario, muestra "¡Buena semana!".

//   let diaDeLaSemana = prompt('¿Qué día de la semana es?');
// if (diaDeLaSemana === 'Sábado' || diaDeLaSemana === 'Domingo') {
//   alert('¡Buen fin de semana!');
// } else {
//     alert('¡Buena semana!');
// }

// 2. Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.

//   let numero = prompt('Escribe un número positivo o negativo');
// if (numero > 0) {
//     alert('Número positivo');
// } else if (numero < 0) {
//     alert('Número negativo');
// } else {
//     alert('El número es cero');
// }

// 3. Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "
// ¡Enhorabuena, has ganado!". En caso contrario, muestra "Inténtalo de nuevo para ganar."

//   let puntuacion = 105;
// if (puntuacion >= 100) {
//     console.log('¡Enhorabuena, has ganado!');
// } else {
//     console.log('Inténtalo de nuevo para ganar.');
// }

// 4. Crea un mensaje que informe al usuario sobre el saldo de la cuenta,
//  utilizando un template string para incluir el valor del saldo.

//   let saldoCuenta = 500; // Ejemplo de saldo
// alert(`Tu saldo es de ${saldoCuenta}.`);

// 5. Pide al usuario que ingrese su nombre usando prompt. Luego, muestra una alerta de bienvenida utilizando ese nombre.

//   let nombre = prompt('Por favor, ingresa tu nombre');
// alert(`¡Bienvenido, ${nombre}!`);

// Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.

// let contador = 1;
// while (contador <= 10) {
// console.log(contador);
// contador++;
// }

// Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.

// let contador = 10;
// while (contador >= 0) {
// console.log(contador);
// contador--;
// }

// Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.

// let numeroMaximo = prompt("Ingresa un número para la cuenta regresiva:");

// while (numeroMaximo >= 0) {
// console.log(numeroMaximo);
// numeroMaximo--;
// }

// Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.

// let numeroMaximo = prompt("Ingresa un número para la cuenta progresiva:");;
// let contador = 0;

// while (contador <= numeroMaximo) {
// console.log(contador);
// contador++
// }

// 1. **Mensaje de bienvenida**

   ```
   console.log('¡Bienvenido!');
   ```

// 2. **Saludo personalizado**

  //  ```
  //  nombre = 'Gui Lima';
  //  console.log(`¡Hola, ${nombre}!`);
  //  ```

// 3. **Saludo personalizado con alerta**

  //  ```
  //  nombre = 'Gui Lima';
  //  alert(`¡Hola, ${nombre}!`);
  //  ```

// 4. **Pregunta y respuesta utilizando prompt**

   ```
   lenguajePreferido = prompt('¿Cuál es el lenguaje de programación que más te gusta?');
   console.log(lenguajePreferido);
   ```

// 5. **Suma de dos valores**

  //  ```
  //  valor1 = 42;
  //  let valor2 = 8;
  //  let resultado = valor1 + valor2;
  //  console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}.`);
  //  ```

// 6. **Resta de dos valores**

  //  ```
  //  valor1 = 10;
  //  let valor2 = 8;
  //  let resultado = valor1 - valor2;
  //  console.log(`La diferencia entre ${valor1} y ${valor2} es igual a ${resultado}.`);
  //  ```

// 7. **Determinar si es mayor o menor de edad**

   ```
   edad = prompt('Ingresa tu edad:');
   if (edad > 17) {
       console.log('Eres mayor de edad.');
   } else {
       console.log('Eres menor de edad.');
   }
   ```

// 8. **Verificar si un número es positivo, negativo o cero**

   ```
   numero = parseFloat(prompt("Ingresa un número:"));
   if (numero > 0) {
       console.log("El número es positivo.");
   } else if (numero < 0) {
       console.log("El número es negativo.");
   } else {
       console.log("El número es cero.");
   }
   ```

// 9. **Imprimir números del 1 al 10 con un bucle while**

   ```
   numero = 1;
   while (numero <= 10) {
       console.log(numero);
       numero++;
   }
   ```

// 10. **Determinar si una nota es aprobada o reprobada**

    ```
    nota = 8; // Reemplaza con el valor de la nota que deseas probar
    if (nota >= 7) {
        console.log("Aprobado");
    } else {
        console.log("Reprobado");
    }
    ```

// 11. **Número aleatorio con Math.random**

    ```
    numeroAleatorio = Math.random();
    console.log(numeroAleatorio);
    ```

// 12. **Número entero aleatorio entre 1 y 10 con Math.random**

    ```
    numeroIntAleatorio = parseInt(Math.random() * 10) + 1;
    console.log(numeroIntAleatorio);
    ```

// 13. **Número entero aleatorio entre 1 y 1000 con Math.random**

    ```
    numeroIntAleatorio = parseInt(Math.random() * 1000) + 1;
    console.log(numeroIntAleatorio);
    ```
