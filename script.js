var grocery = new Fruit("Mango", "Yellow", 200, 10);
function Fruit(name, price, color, quantity) {
    this.name = "Mango";
    this.color = "Yellow";
    this.price = 200;
    this.quantity = 10;
}
console.log(grocery);


grocery = new Vegetable("Okra", "Green", 100, 20);
function Vegetable(name, color, price, quantity) {
    this.name = "Okra";
    this.color = "Green";
    this.price = 100;
    this.quantity = 20;
}
console.log(grocery);


grocery = new Meat("Chicken", 250, "1Kg");
function Meat(name, color, price, quantity) {
    this.name = "Chicken";
    this.price = 250;
    this.quantity = "1Kg";
}
console.log(grocery);


grocery = new Drink("Marinda", "120ml", 300, 1);
function Drink(name, ml, price, quantity) {
    this.name = "Marinda";
    this.ml = "120ml";
    this.price = 300;
    this.quantity = 1;
}
console.log(grocery);


grocery = new Spices("Pepper", "Black", 50, "100gram");
function Spices(name, color, price, quantity) {
    this.name = "Pepper";
    this.color ="Black";
    this.price = 50;
    this.quantity = "100gram"; 
}
console.log(grocery);

