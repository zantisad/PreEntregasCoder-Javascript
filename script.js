let alumnosNotas = [6, 8, 6, 8, 3, 7, 5, 8, 3, 8, 6, 4, 8, 6, 3]

let tuNota = Number(prompt("Cual fue tu nota? (1-10)"));

while (tuNota <= 0 || tuNota > 10 || isNaN(tuNota))  {
  tuNota = Number(prompt("Dime una nota valida"));
}


if (tuNota > 0 && tuNota <= 10) {
  let suma = (tuNota + (alumnosNotas.reduce((total, actual) => total + actual, 0))) / (alumnosNotas.length + 1) ;
  console.log(`El promedio de todos los estudiantes fue de ` + suma.toFixed(1) );
}

//encontrar la nota mas alta 
let maximo = Math.max(...alumnosNotas);
if (tuNota > maximo) {
  maximo = tuNota;
  console.log("La nota mas alta fue la tuya con: " + maximo);
} else {
  console.log("La nota mas alta fue de: " + maximo)
}



//Encontrar la nota mas baja 
let minimo = Math.min(...alumnosNotas);
if (tuNota < minimo) {
  minimo = tuNota;
  console.log("La nota mas baja fue la tuya con: " + minimo);
} else {
  console.log("La nota mas baja fue de: " + minimo)
}





/* let alumnosNotas = [6, 8, 6, 8, 3, 7, 5, 8, 3, 8, 6, 4, 8, 6, 3];

// Función para validar la nota
function validarNota() {
  let nota;
  do {
    nota = Number(prompt("Cual fue tu nota? (1-10)"));
  } while (nota <= 0 || nota > 10);
  return nota;
}

// Función para calcular el promedio
function calcularPromedio(tuNota) {
  let suma = (tuNota + alumnosNotas.reduce((total, actual) => total + actual, 0)) / (alumnosNotas.length + 1);
  return suma.toFixed(1);
}

// Función para encontrar la nota más alta
function encontrarNotaMasAlta(tuNota) {
  let maximo = Math.max(...alumnosNotas);
  if (tuNota > maximo) {
    return "La nota más alta fue la tuya con: " + tuNota;
  } else {
    return "La nota más alta fue de: " + maximo;
  }
}

// Función para encontrar la nota más baja
function encontrarNotaMasBaja(tuNota) {
  let minimo = Math.min(...alumnosNotas);
  if (tuNota < minimo) {
    return "La nota más baja fue la tuya con: " + tuNota;
  } else {
    return "La nota más baja fue de: " + minimo;
  }
}

// Lógica principal
let tuNota = validarNota();
console.log("El promedio de todos los estudiantes fue de " + calcularPromedio(tuNota));
console.log(encontrarNotaMasAlta(tuNota));
console.log(encontrarNotaMasBaja(tuNota)); */
