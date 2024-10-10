class Product {
    // Private fields for various product features
    #name;
    #price;
    #category;
    #rating;
    #color;
    #brand;
    #model;
    #stock;
    #warranty;
    #discount;

    // Creating a constructor 
    constructor({name, price, category, rating, color, brand, model, stock, warranty, discount}){
        this.#name = name;
        this.#price = price;
        this.#category = category;
        this.#rating = rating;
        this.#color = color;
        this.#brand = brand;
        this.#model = model;
        this.#stock = stock;
        this.#warranty = warranty;
        this.#discount = discount;
    }

    // Defining getter and setter
    get Price() {
        return this.#price;
    }
    set Price(p) {
        if(p > 0) {
            this.#price = p; // Use 'p' instead of 'price'
        } else {
            console.log("Invalid Price");
        }
    }

    get name(){
        this.#name=name;
    }

    set name(n){
        if(n===0){
            console.log("Product must have name ");
            return;
        }else{
            this.#name=n;
        }
    }

    get category(){
        this.#category=c;
    }
    set category(c){
        this.#category=c;
    }
    // Displaying the product
    displayProduct() {
        console.log("Product Details:");
        console.log("Name:", this.#name);
        console.log("Price:", this.#price);
        console.log("Category:", this.#category);
        console.log("Rating:", this.#rating);
        console.log("Color:", this.#color);
        console.log("Brand:", this.#brand);
        console.log("Model:", this.#model);
        console.log("Stock:", this.#stock);
        console.log("Warranty:", this.#warranty);
        console.log("Discount:", this.#discount);
    }
}

// Creating an object 
let NewProduct = new Product({
    name: "iphone",
    price: 1234,
    category: "mobile",
    rating: 4.5,
    color: 'red',
    brand: 'Apple',
    model: '12 Pro Max',
    stock: 100,
    warranty: '1 year',
    discount: '10%'
});

// Calling the getter & setter
NewProduct.Price = 19999;  // This uses the setter
NewProduct.displayProduct();  // Display product details
