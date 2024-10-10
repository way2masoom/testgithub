// Class in Js

// Define a class       
class Product{
    // class properties | data member
    name;
    price;
    category;
    ratting;

    // creating an constructor
    constructor(ProductName,ProductPrice,ProductCategory,ProductRatting) {
        this.name=ProductName;
        this.price=ProductPrice;
        this.category=ProductCategory;
        this.ratting=ProductRatting;
        console.log("Calling Constructor");
    }

    // member Function | Methods 
    addToCart(){
        console.log("Product added to cart");
    }

    removeFromCart(){
        console.log("Removed form cart");
    }

    buyProduct(){
        console.log("Buy the Product");
    }

    displayProduct(){
        console.log("Displaying the product properties \n",this);
    }

}

// Creating an Object of the 'Product' Class
let newProduct=new Product("Iphone 12",4567,"Mobile",4.5);

// newProduct.name="Iphone";
// newProduct.price=1234;
// newProduct.category="Electronic";
// newProduct.ratting=4.5;

console.log(newProduct);

