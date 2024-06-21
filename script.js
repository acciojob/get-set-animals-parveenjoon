// Animal class definition
class Animal {
    constructor(species) {
        this._species = species;
    }

    get species() {
        return this._species;
    }

    makeSound() {
        console.log(`The ${this.species} makes a sound`);
    }
}

// Cat class extends Animal
class Cat extends Animal {
    purr() {
        console.log("purr");
    }
}

// Dog class extends Animal
class Dog extends Animal {
    bark() {
        console.log("woof");
    }
}

// Example usage:
const myCat = new Cat("Siamese");
myCat.makeSound(); // Output: The Siamese makes a sound
myCat.purr(); // Output: purr

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // Output: The Golden Retriever makes a sound
myDog.bark(); // Output: woof

// Do not change the code below this line
window.Animal = Animal;
window.Cat = Cat;
window.Dog = Dog;
