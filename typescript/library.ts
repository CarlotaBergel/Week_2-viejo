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
    setAddress(direccion: string){
        this.address = direccion;
    }
    getManager(): string{
        return this.manager
    }
    setManager(manager: string){
        this.manager = manager;
    }

    toString(){
        for(let libro of this.books){
            console.log("Libro \n");
            libro.toString();
            console.log("\n");
        }
        console.log("address - " + this.address + "\n" + "manager - " + this.manager);
    }
    getNumberOfBooks(){
        return this.books.length
    }
    findByAuthor(autor:String){
        
        let librosAutores: Book[] = [];
        for (let i = 0; i < this.books.length; i++){
          
            if(autor == this.books[i].getAutor()){
                librosAutores.push(this.books[i]);
            }
        }
        return librosAutores;
    }
}
