let products =[
    {
        id:1,title:'hp',description:'bad',price:199
    },
    {
        id:2,title:'Dell',description:'good',price:399
    },
    {
        id:3,title:'Lenovo',description:'very good',price:599
    }
];
let counter = 4;

module.exports = class Product{
    constructor(id,title,description,price){
        this.id = id;
        this.title=title;
        this.description= description;
        this.price=price;
    }

    static getAllProducts(){
        return products;
    }

    static getProductById(id){
        return products.find(p=>p.id==id)
    }
    save(){
        this.id = counter++;
        products.push(this);
    }

    updateById(id){
        const index = products.findIndex(p=>p.id==id);
        if(index>-1){
            products[index]=this;
        }
        else{
            throw new Error(`Cannot find Product with ID: ${id} in the database`);
        }
    }

   static  deleteById(id){
        const index = products.findIndex(p=>p.id==id);
        if(index>-1){
            products.splice(index,1);
        }
        else{
            throw new Error(`Cannot find Product with ID: ${id} in the database`);
        }
    }


}