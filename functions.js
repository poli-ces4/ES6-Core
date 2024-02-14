/**
 * Function Declaration (nombradas)
 */

function jugar(valor = 10) {
  return valor * 1000;
}
console.log(jugar(6));

/**
 * Function Expression (anonimas)
 */
const resp = function (valor = 10) {
  return valor * 1000;
};
console.log(resp(8));
