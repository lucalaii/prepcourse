/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
  // string -> "hola"
  // Debe retornar un string.
  // Tu código:
  return string;
}

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
  // Retorna el resultado de su suma.
   // Tu código:
   /* var resultado = x + y
   return resultado */
   // 
   return x + y
}
// suma(3,5) // 8
// console.log(suma(3,5))

function resta(x, y) {
  // Retorna el resultado de la resta.
   // Tu código:
   return x - y
}
// resta(4,2) // 2

function divide(x, y) {
  // Retorna el resultado de su división.
   // Tu código:
   return x / y
}
console.log(divide(16,2)) // 8

function multiplica(x, y) {
  // Retorna el resultado de su multiplicación.
   // Tu código:
   return x * y;
}
console.log(multiplica(3,5))

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y".
   // Tu código:
   return x % y
}
console.log(obtenerResto(9,2)) // 0

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  devolverString,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
};
