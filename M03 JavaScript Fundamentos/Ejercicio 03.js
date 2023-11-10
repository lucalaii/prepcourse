/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
  // Retorna true si "x" e "y" son iguales.
  // De lo contrario, retorna false.
  // Tu código:
  // return x === y
  if (x === y) return true;
  else return false;
}

function tienenMismaLongitud(str1, str2) {
  // str1 -> "hola"
  // str2 -> "chaos"
  // Retorna true si los dos strings tienen la misma longitud.
  // De lo contrario, retorna false.
  // Tu código:
  // metodo -> es un atributo de los objetos
  // ejemplo -> return "hola".length === "chaos".length
  // return str1.length === str2.length;
  // "hola" === "chao"
  //var longitud_str1 = str1.length;
  //var longitud_str2 = str2.length;
  if (str1.length === str2.length) return true; //"hola". length
  else return false;
}
console.log(tienenMismaLongitud("hola", "chaos"));
// console.log("holas".length === "chaos".length)

function menosQueNoventa(num) {
  // Retorna true si el argumento "num" es menor que noventa.
  // De lo contrario, retorna false.
  // Tu código:
  // return num < 90 ? true : false;
  if (num < 90) return true;
  else return false;
}
console.log(menosQueNoventa(82));

function mayorQueCincuenta(num) {
  // Retorna true si el argumento "num" es mayor que cincuenta.
  // De lo contrario, retorna false.
   // Tu código:
   if (num > 50) return true
   else return false
}

function esPar(num) {
   // num -> 8
  // Retorna true si "num" es par.
  // De lo contrario, retorna false.
   // Tu código:
   // return num % 2 === 0 ? true : false
   if (num % 2 === 0) return true // 
   else return false
} 
console.log(esPar(8))

function esImpar(num) {
   // num -> 8
  // Retorna true si "num" es impar.
  // De lo contrario, retorna false.
   // Tu código:
   /* if (num % 2 !== 0) return true;
   else return false; */
   // var resultado = esPar(num)
   // esPar(8) -> !true -> false
   return !esPar(num)
}
console.log(esImpar(8))

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  esPar,
  esImpar,
};
