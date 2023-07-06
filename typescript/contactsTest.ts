import {Person} from "./person";
import {Contacts} from "./contacts";

let persona1: Person = new Person ("Carla", 30, "Calle Salmon");
let persona2: Person = new Person ("Jesus", 40, "Calle Turquia");
let persona3: Person = new Person ("Jaime", 50, "Calle Soledad");

let personas = [persona1, persona2, persona3];

let agenda: Contacts = new Contacts();

agenda.people = personas;

agenda.printCalendar();
