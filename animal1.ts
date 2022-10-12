namespace animal1{

class Animal {
    name : string;
    legs : number;
    contructor(theName : string){
        this.name;
    }
    move(distanceInMeters: number = 0){
        console.log("Animal moved " + distanceInMeters + " meters")
    }
}

// Inheritance Example
class Dog extends Animal {
    bark() {
        console.log("Woof! Woof!")
    }
}

function testAnimal(){
    const generic : Animal = new Animal();
    const Lassie : Dog = new Dog();

    Lassie.bark();
    Lassie.move(5);

    generic.move(10);
    generic.bark();  // Generates an error
}

testAnimal()
}