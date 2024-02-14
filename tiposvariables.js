function explicarVar() {
  var edad = 10;
  edad = 90;
  if (true) {
    var edad = 45;
    console.log(edad);
  }
  console.log(edad);
}
explicarVar();

function explicarLet() {
  let edad = 10;
  edad = 90;
  if (true) {
    let edad = 45;
    console.log(edad);
  }
  console.log(edad);
}
explicarLet();

function explicarConst() {
  const edad = 10;
  const jugador = { name: "Juan" };
  //edad = 90;
  if (true) {
    const edad = 45;
    console.log(edad);
  }
  console.log(edad);
  console.log(jugador);
  jugador.lastname = "Perez";
  console.log(jugador);
}
explicarConst();
