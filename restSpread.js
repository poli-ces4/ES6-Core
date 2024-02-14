/**
 * Operator Rest (recibir parametros)
 */

function calcularTotal(...datos) {
  let total = 0;
  datos.forEach((dato) => (total += dato));
  return total;
}
console.log(calcularTotal(1, 2, 3, 4, 5, 6, 775, 4, 4, 4));

/**
 * Operator Spread (enviar argumentos)
 */

const deudaMax = 1000;
const deudas = [100, 200];
const totalDeudas = [deudaMax, ...deudas];
console.log(totalDeudas);
const resultado = calcularTotal(...totalDeudas);
console.log(resultado);
