let {Person} = require("./person");

let hobbies = ["bailar", "cantar", "futbol"];

let persona1 = new Person("Juana","Martinez", 1999, 74, 161, hobbies);

console.log(persona1.calcularIMC());
console.log (persona1.calcularEdad());
console.log(persona1.printAll());
console.log(persona1.printHobbies());

