export class menuItem{
    name : string;
    category : string;
    description : string;
    price: number;   

    constructor(name : string, category : string, description : string, price: number){
        this.name = name;
        this.category = category;
        this.description = description;
        this.price = price;
    }
}