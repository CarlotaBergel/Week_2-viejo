class Person{

    constructor (nombre, apellido, añoNacimiento, peso, altura, hobbies){
    this.nombre = nombre;
    this.apellido = apellido ;
    this.yearOfBirth = añoNacimiento;
    this.peso = peso;
    this.altura = altura;
    this.hobbies = hobbies;
    }

    calcularIMC(){
        let imc = Math.round(this.peso/(this.altura*this.altura)*10000);
        return imc;
    }

    calcularEdad(){
        let añoActual = 2023;
        let edad = añoActual - this.yearOfBirth
        return edad;
    }

    printAll(){
        console.log("Nombre - " + this.nombre);
        console.log("Apellido - " + this.apellido);
        console.log("Año de nacimiento - " + this.yearOfBirth);
        console.log("Peso - " + this.peso);
        console.log("Altura - " + this.altura);
    }

    printHobbies(){
        
        for(let i=0; i<hobbies.length; i++){
            console.log(hobbies[i]);
        }
        
    }
}
// export default Person;
module.exports = Person;