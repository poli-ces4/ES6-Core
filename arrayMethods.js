let perfiles = ["admin", "user"];

perfiles.forEach((perfil) => console.log(perfil));

//push - pop - shift son mutables
perfiles.push("SuperAdmin");
console.log(perfiles);
perfiles.pop();
console.log(perfiles);
perfiles.shift();
console.log(perfiles);

//Inmutables Map - Filter -Reduce - Some - Every

let nombres = [
  { name: "Ana", age: 20 },
  { name: "Lina", age: 10 },
  { name: "Maria", age: 5 },
];
//Map = recorrer, iterar , extraer, transformar informacion
const res = nombres.map((item) => item.name);
console.log(res);
console.log(nombres);

let newNames = nombres.map((item) => {
  return { ...item, year: 2024 };
});
console.log(newNames);
console.log(nombres);

const universidad = [
  {
    nombre: "Tecnica Sistemas",
    ciudad: "Medellin",
    graduados: 100,
    desertaron: 20,
    year: 2021,
  },
  {
    nombre: "Tecnica Sistemas",
    ciudad: "Rionegro",
    graduados: 50,
    desertaron: 10,
    year: 2021,
  },
  {
    nombre: "Tecnica Sistemas",
    ciudad: "Uraba",
    graduados: 30,
    desertaron: 0,
    year: 2021,
  },
  {
    nombre: "Tecnologia Sistemas",
    ciudad: "Medellin",
    graduados: 180,
    desertaron: 20,
    year: 2021,
  },
  {
    nombre: "Tecnologia Sistemas",
    ciudad: "Rionegro",
    graduados: 50,
    desertaron: 10,
    year: 2021,
  },
  {
    nombre: "Tecnologia Sistemas",
    ciudad: "Uraba",
    graduados: 30,
    desertaron: 0,
    year: 2021,
  },
];

//Every
const sinDesercion = universidad.every((item) => item.desertaron === 0);
console.log(sinDesercion);
//Some
const algunoDesercion = universidad.some((item) => item.desertaron > 0);
console.log(algunoDesercion);

//Filter
const programaSinDesercion = universidad
  .filter((item) => item.desertaron === 0)
  .map((item) => item.nombre);

console.log(programaSinDesercion);
//Reduce

const graduadosUraba = universidad
  .filter((item) => item.ciudad === "Uraba")
  .reduce((contador, item) => (contador += item.graduados), 0);
console.log(graduadosUraba);

const masGraduados = universidad.reduce((prev, act) => {
  return prev.graduados > act.graduados ? prev : act;
});
console.log(masGraduados);
