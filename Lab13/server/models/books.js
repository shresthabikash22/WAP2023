
let books=[
    {
        id:1,
        title:'The Line of Beauty',
        isbn:'1582346100',
        publishedDate:'2005-10-17',
        author:'Alan Hollinghurst'
    }
];
let counter = 2;
module.exports = class Books{
    constructor(id,title,isbn,publishedDate,author){
        this.id = id;
        this.title = title;
        this.isbn = isbn;
        this.publishedDate=publishedDate;
        this.author = author;
    }

    static getAllBooks(){
        return books;
    }

    static getBookById(id){
        return books.find(b=>b.id==id);
    }

    save(){
        this.id = counter++;
        books.push(this);
    }

    updateById(id){
        const index = books.findIndex(b=>b.id == id);
        if(index>-1){
            books[index]=this;
        }
        else{
            throw new Error(`Cannot find Book with ${id} in the database`);
        }
    }

    static deleteById(id){
        const index = books.findIndex(b=>b.id == id);
        if(index>-1){
            books.splice(index,1);
        }
        else{
            throw new Error(`Cannot find Book with ${id} in the database`);
        }
    }

}