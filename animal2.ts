class Animal2 {
    name : string;
    legs : number; 
    constructor(theName : string){
        this.name = theName;
    }
    move(distanceInMeters: number = 0){
        console.log("Animal moved " + distanceInMeters + " meters")
    }
}


// Inheritance Example 2 - Overloading constructor and method
class Dog2 extends Animal2 {
    constructor(theName: string){
        super(theName);
        this.legs = 4;  // We can set the number of legs since we know what this animal has
    }
    bark() {
        console.log("Woof! Woof!")
    }
    move(distanceInMeters: number = 5){
        console.log("Dog moved " + distanceInMeters + " meters")
    }        
}

class Human extends Animal2 {
    constructor(theName: string){
        super(theName);
        this.legs = 2;  // We can set the number of legs since we know what this animal has
    }
    speak() {
        console.log("Ahem!, Ahem!")
    }
    move(distanceInMeters: number = 1){
        console.log("The human...")
        super.move(distanceInMeters)
    }     
}

function testAnimal2(){
    const generic : Animal2 = new Animal2("?");
    const Lassie : Dog2 = new Dog2("Barky");
    const Steve : Human = new Human("Steve");

    Lassie.bark();
    Lassie.move();
    Lassie.move(10);

    Steve.speak();
    Steve.move(2);

    console.log("\nGeneric Animal class still works")
    generic.move();
    //generic.bark();  // Generates an error


}

testAnimal2()