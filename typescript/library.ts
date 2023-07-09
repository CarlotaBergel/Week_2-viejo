import {Book} from "./book"

export class Library{
    private books: Book[];
    private address: string;
    private manager: string;

    constructor(libros: Book[], direccion: string, manager:string){
        this.books = libros;
        this.address = direccion;
        this.manager = manager;
    }

    getAddress(): string{
        return this.address
    }

    setAddress(direccion: string):void{
        this.address = direccion;
    }

    getManager(): string{
        return this.manager
    }

    setManager(manager: string):void{
        this.manager = manager;
    }

    toString():string{

        // El método tostring(), no es correcto,  dale una vuelta a la estructura. 
        for(let libro of this.books){
            console.log("Libro");
            libro.toString();
            console.log("\n");
        }
        return "address - " + this.address + "\n" + "manager - " + this.manager;
    }

    getNumberOfBooks(){
        return this.books.length
    }

    findByAuthor(autor:String):Book[]{
      
        return this.books.filter(valor => valor.getAutor() == autor)
    }
}

Book.toString()