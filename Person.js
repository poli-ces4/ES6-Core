class Person {
  constructor(name, lastname, age) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }
  saludar() {
    return `Hola ${this.name}`;
  }
}
const persona = new Person("Ana", "Lopez", 30);
console.log(persona.name);
