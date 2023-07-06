import { Person } from "./person";

export class Contacts{
    public people: Person[];

    constructor(){

        this.people = new Array();
    }

    printCalendar(){
        for(let persona of this.people){
            console.log(persona);
        }
    }
}
