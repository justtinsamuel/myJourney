// Object Oriented Programming

/* OOP 
1. Class = Blueprint dari Object
2. Key, atribute, method
3. Instance hasil dari object yang sudah jadi dari class

CLASS:
*/

class Vehicle {
  constructor(name, type, price, isAvailable) {
    this.name = name;
    this.type = type;
    this.price = price;
    this.isAvailable = isAvailable;
  }

  startEngine() {
    console.log("Start Engine");
  }
  stopEngine() {
    console.log("Stop Engine");
  }
}

// Instance nya adalah:
let vehicle = new Vehicle("Civic", "Sedan", 1000000, true);
console.log(typeof vehicle);
vehicle.startEngine();

// Kelebihan OOP : Paralel Dev, Reuseable, Scalable
// Kekurangan OOP : bisa duplicate
