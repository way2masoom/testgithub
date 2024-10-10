// Class in Js

// Define a class       
class Product {
    // class properties | data member
    #name;
    #price;
    category;
    ratting;
    description

    // creating an constructor
    constructor(ProductName, ProductPrice, ProductCategory, ProductRatting,ProductDescription) {
        this.#name = ProductName;
        this.#price = ProductPrice;
        this.category = ProductCategory;
        this.ratting = ProductRatting;
        this.description=ProductDescription;
        // console.log("Calling Constructor");
    }
    // Getter & Setter
    getPrice(){
        return this.#price;
    }

    setPrice(p){
        if(p>0){
            this.#price=p;
        }else{
            console.log("Invalid price");
            
        }
    }

    // new way to set getter and setter
    get description(){
        return this.description;
    }

    set description(d){
        if(d.length===0){
            console.log("Invalid description");
            return;
        }else{
            console.log("This is Iphone product by Apple");
        }
    }

    // member Function | Methods 
    displayProduct() {
        console.log("Displaying the product properties \n", 
            this.#name, this.#price, this.category, this.ratting,this.description);
    }


}

// Creating an Object of the 'Product' Class
let newProduct = new Product("Iphone 12", 1000, "Mobile", 4.5);

console.log(newProduct);

// Trying to update the price
newProduct.setPrice(999);
newProduct.displayProduct();
console.log("getPrice: ", newProduct.getPrice());

// Description by new Setter and getter
newProduct.description="product description is here";
console.log(newProduct.displayProduct());







