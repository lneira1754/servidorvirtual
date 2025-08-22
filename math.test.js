const { suma, resta, multiplicar } = require("./math");

console.assert(suma(2, 3) === 5, "Error en suma(2,3)");
console.assert(resta(10, 4) === 6, "Error en resta(10,4)");
console.assert(multiplicar(3, 4) === 12, "Error en multiplicar(3,4)");

console.log("✅ Todos los tests pasaron correctamente.");
