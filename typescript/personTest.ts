import { Person } from "./person";

let persona2 : Person = new Person ("Cristina", 44, "calle Pez");

console.log(persona2);

console.log(persona2.printName());
console.log(persona2.yearOfBirth(2023,44));

persona2.setAddress("Calle Trucha");
console.log(persona2.getAddress());


