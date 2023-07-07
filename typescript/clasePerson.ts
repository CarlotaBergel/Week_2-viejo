class Person{
    public nombre : string;
    public edad : number;
    private direccion : string;

    constructor (nom:string, años:number, direcc:string){
        this.nombre = nom;
        this.edad = años;
        this.direccion = direcc;
    }
    
    printName(){
        return this.nombre
    }

    yearOfBirth(añoActual: number, edad: number){
        
        let añoNaciemiento = añoActual - edad 

        return añoNaciemiento
    }

    setAddress(dir: string):void{
        this.direccion = dir;
    }

    getAddress(){
        return this.direccion 
    }
        
}


let persona1: Person = new Person ("carlota",24, "calle Cantabria");

persona1.setAddress("Jamaica");

console.log(persona1)