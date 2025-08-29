class Product{
    static productCount = 0;
    static total = 0;
    constructor(id, name, price){
        this.id = id;
        this.name = name;
        this.price = price;
        Product.productCount++;
        Product.total += price;
    }
    totalPrice = function(){
        return Product.total;
    }
}

class CareProduct extends Product{
    constructor(id, name, price, warrantyPeriod){
        super(id, name, price);
        this.warrantyPeriod = warrantyPeriod;
    }

    totalPrice = function(){
        let discount = 0;
        if(this.warrantyPeriod === 5){
            discount = 0.1;
        } else if(this.warrantyPeriod === 4){
            discount = 0.2;
        } else if(this.warrantyPeriod === 3){
            discount = 0.3;
        } else if(this.warrantyPeriod === 2){
            discount = 0.4;
        } else if(this.warrantyPeriod === 1){
            discount = 0.5;
        }
        return Product.total * (1 - discount);
    }
}
