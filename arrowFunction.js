const saludar = function (nombre) {
  return `Hola ${nombre} como estas?`;
};

console.log(saludar("Juan"));

const saludarNew = (nombre) => `Hola ${nombre} como estas?`;

console.log(saludarNew("Juan"));

const calcular = (valor1, valor2) => valor1 + valor2;
console.log(calcular(8, 9));
