let alumnosNotas = [6, 8, 6, 8, 3, 7, 5, 8, 3, 8, 6, 4, 8, 6, 3] // 15 notas iniciales (sin contar las tardias ni la mia)

// APARTADO (NOTAS TARDIAS)
function agregarNotaTardia(nuevaNota) {
  alumnosNotas.push(nuevaNota);
}

//AGREGAR TODAS LAS NOTAS TARDIAS
agregarNotaTardia(7);
agregarNotaTardia(8);
agregarNotaTardia(2);
agregarNotaTardia(9);
agregarNotaTardia(6);

//MOSTRAR CUANTAS NOTAS TARDIAS HUBIERON
let notasTardias = alumnosNotas.length - 15; // = CANTIDAD DE NOTAS TARDIAS

if (notasTardias > 0) {
  console.log(`Hubieron ${notasTardias} Notas tardias`)
} else {
  console.log("No hubieron Notas tardias")
}

// APARTADO (MI NOTA)
let tuNota = Number(prompt("Cual fue tu nota? (1-10)"));

// IDENTIFICAR QUE TU NOTA ESTE ENTRE 1 Y 10 Y ADEMAS QUE SEA UN NUMERO
while (tuNota <= 0 || tuNota > 10 || isNaN(tuNota))  {
  tuNota = Number(prompt("Dime una nota valida"));
}

// CUANDO DIGITES TU NOTA DE FORMA CORRECTA
if (tuNota > 0 && tuNota <= 10) {
  alumnosNotas.push(tuNota);
}

// CALCULAR PROMEDIO
let promedio = (alumnosNotas.reduce((total, actual) => total + actual, 0)) / (alumnosNotas.length) ; //HALLO EL VALOR TOTAL DE LAS NOTAS SUMADAS Y LAS DIVIDO ENTRE LA CANTIDAD DE NOTAS PARA SABER EL PROMEDIO
console.log(`El promedio de todos los estudiantes(${alumnosNotas.length})  fue de ` + promedio.toFixed(1) );

//Encontrar la nota mas alta 
let maximo = Math.max(...alumnosNotas);
if (tuNota >= maximo) {
  console.log("La nota mas alta fue la tuya con: " + maximo);
} else {
  console.log("La nota mas alta fue de: " + maximo)
}

//Encontrar la nota mas baja 
let minimo = Math.min(...alumnosNotas);
if (tuNota <= minimo) {
  console.log("La nota mas baja fue la tuya con: " + minimo);
} else {
  console.log("La nota mas baja fue de: " + minimo)
}