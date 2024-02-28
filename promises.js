//Callback = es una funcion que se le pasa com parametro a otra funcion

function resp(res) {
  console.log(res);
}

function sumar(op1, op2, functionCallback) {
  let resp = op1 + op2;
  functionCallback(resp);
}

sumar(10, 5, resp);

//Promesas: son un objeto y son asincronas

let promesa1 = new Promise((res, rej) => {
  let estado = true;
  if (estado) {
    res("Resolvio la promesa");
  } else {
    rej("Rechazo promesa");
  }
});

//opcion1
/*
promesa1
  .then((valor) => console.log(valor))
  .catch((valor) => console.log(valor));

//opcion2
promesa1.then(
  (valor) => console.log(valor),
  (error) => console.log(error)
);
*/

//promesa con setTimeout para evidenciar asincronismo
/*
let promesa2 = new Promise((res) => {
  console.log("Inicio promesa2");
  setTimeout(() => {
    res("Resolvio promesa2");
  }, 3000);
  console.log("Fin promesa 2");
});

promesa2.then((valor) => console.log(valor));
*/

//async= indicar a una funcion que regresa una promesa
//await= esperar el resultado de una promesa
/*
async function funcionConAsync() {
  return "Ejemplo con async";
}
funcionConAsync().then((x) => console.log(x));
*/
async function funcionConasyncAwait() {
  console.log("Inicio promesa funcionConasyncAwait");
  let promesa3 = new Promise((res) => {
    setTimeout(() => {
      res("Resolvio funcionConasyncAwait");
    }, 3000);
  });
  console.log(await promesa3);
  console.log("Fin promesa funcionConasyncAwait");
}

funcionConasyncAwait();
