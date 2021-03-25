// Arrays
let colors = ['red', 'green', 'blue', 5];
let ages: number[] = [5, 3, 54, 12];

// Classes
class Car {}
let car: Car = new Car();

// Object literals
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};
// Destructured objects
let person = {
  age: 10,
  name: 'Bobby',
  coords: {
    lat: 112,
    lon: 321,
  },
  setAge(age: number): void {
    this.age = age;
  },
};
const { age }: { age: number } = person; // must also destructure the type annotation
const {
  coords: { lat, lon },
}: { coords: { lat: number; lon: number } } = person;

// Functions
const logNum = (a: number, b: number): number => {
  return a + b;
};

// Interfaces
interface Vehicle {
  name: string;
  year: Date;
  isBroken: boolean;
  summary(): string; // what the function returns
}

const oldCivic: Vehicle = {
  name: 'Honda Civic',
  year: new Date(),
  isBroken: false,
  summary() {
    return `Name: ${this.name}`;
  },
};

// Class field modifiers
class Paint {
  constructor(public color: string) {}
}

class CoolPaint extends Paint {
  constructor(color, public isGlossy: boolean) {
    super(color);
  }
}
