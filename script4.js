// Factory Pattern

// a mechanism to create other objects.
// a factory for creating cars.
// useful when you want a factory to handle most of your classes and then simply
//         use this factory method to create your new objects.

class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

// create new cars for us automatically
class carFactory {
  createCar(type) {
    switch (type) {
      case "civic":
        return new Car(4, "V6", "grey");
      case "honda":
        return new Car(2, "V8", "red");
      case "nx300h":
        return new Car(4, "V4", "black");
    }
  }
}

const factory = new carFactory();
const myHonda = factory.createCar("honda");
// for example for users who can create in an application (game)

console.log(myHonda);

// const myCivic = factory.createCar("civic");
// console.log(myCivic);
