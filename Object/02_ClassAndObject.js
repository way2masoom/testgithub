// Class in Js

// Define a class       
class Product {
    // class properties | data member
    #name;
    #price;
    category;
    ratting;

    // creating an constructor
    constructor(ProductName, ProductPrice, ProductCategory, ProductRatting) {
        this.#name = ProductName;
        this.#price = ProductPrice;
        this.category = ProductCategory;
        this.ratting = ProductRatting;
        console.log("Calling Constructor");
    }

    // member Function | Methods 
    display() {
        console.log("Displaying the product properties \n", this.#name, this.#price, this.category, this.ratting);
    }


}

// Creating an Object of the 'Product' Class
let newProduct = new Product("Iphone 12", 4567, "Mobile", 4.5);

console.log(newProduct);
newProduct.display();



