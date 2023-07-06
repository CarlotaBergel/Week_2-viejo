export class Book{
    private titulo: string;
    private numPag: number;
    private isbn: string;
    private autor: string;
    private editorial: string;

    constructor(tit: string, npag: number, isbn: string, autor: string, edit: string){
        this.titulo = tit;
        this.numPag = npag;
        this.isbn = isbn;
        this.autor = autor;
        this.editorial = edit;
    }

    getTitulo(): string{
        return this.titulo
    }
    setTitulo(tit: string){
        this.titulo = tit;
    }
    getnumPag(): number{
        return this.numPag;
    }
    setnumPag(npag: number){
        this.numPag = npag;
    }
    getIsbn(): string{
        return this.isbn;
    }
    setIsbn(isbn: string){
        this.isbn = isbn;
    }
    getAutor(): string{
        return this.autor;
    }
    setAutor(autor: string){
        this.autor = autor;
    }
    getEditorial(): string{
        return this.editorial
    }
    setEditorial(edit: string){
        this.editorial = edit;
    }
    
    toString(){
        console.log("Title - " + this.titulo +"\n" + "Numer of Pages - " + this.numPag + "\n" + "ISBN - " + this.isbn + "\n" + "Author - " + this.autor + "\n" + "Editorial - " + this.editorial)
    }
}
