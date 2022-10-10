export class Product {
    public id:number;
    public name:string;
    public price:number;
    public image:any;
    constructor(product:any){
        this.id=product.id;
        this.name=product.name;
        this.price=product.price;
        this.image=product.image;
    }
}
