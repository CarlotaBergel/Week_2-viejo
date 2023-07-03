class Contacts
{
    constructor()
    {
        this.persons = new Array ();
    }

    printPersons(){

        for(let i = 0; i < this.persons.length; i++){

            console.log("Nombre - " + this.persons[i].nombre);
            console.log("Apellido - " + this.persons[i].apellido);
            console.log("Año de nacimiento - " + this.persons[i].yearOfBirth);
            console.log("Peso - " + this.persons[i].peso);
            console.log("Altura - " + this.persons[i].altura);

        }
    }
}

module.exports = {Contacts};