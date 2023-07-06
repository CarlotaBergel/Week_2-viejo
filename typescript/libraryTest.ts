import { Book } from "./book";
import { Library } from "./library";


let book1: Book = new Book ("Cenicienta", 255, "ES789-0292", "Manuel Garcia", "circulo Rojo");
let book2: Book = new Book ("La sirenita", 234, "ES789-Es890-243", "Sara Martinez", "SM");

let books: Book[] = [book1,book2]

let libreria: Library = new Library (books, "Calle mar cantabrico", "Jose Mota");

libreria.toString();
