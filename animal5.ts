type Fur = {
    length : number;
    color : string;
}

class fur {
    length : number;
    color : string;
}

interface tail {
    waggingState : string;
}

interface eyebrows {
    eyebrowState : string;
}

abstract class Animal4 {
    name : string;
    legs : number; 
    constructor(theName : string){
        this.name = theName;
    }
    move(distanceInMeters: number = 0){
        console.log("Animal moved " + distanceInMeters + " meters")
    }
    abstract makeSound(): void; // must be implemented in a derived class
}


// Inheritance Example 2 - Overloading constructor and method
class Dog4 extends Animal4 implements tail {
    waggingState: string;
    dogFur : Fur;
    dogFur2 : fur;
    constructor(theName: string, furcolor:string = "brown"){
        super(theName);
        this.legs = 4;  // We can set the number of legs since we know what this animal has
        this.waggingState = "Wagging";
        this.dogFur.color = furcolor;
        this.dogFur2.color = furcolor;
    }
    makeSound() {     //bark()
        console.log("Woof! Woof!")
    }
    move(distanceInMeters: number = 5){
        console.log("Dog moved " + distanceInMeters + " meters")
    }        
}

class Human extends Animal4 implements eyebrows {
    eyebrowState: string;
    constructor(theName: string){
        super(theName);
        this.legs = 2;  // We can set the number of legs since we know what this animal has
        this.eyebrowState = "raised"
    }
    makeSound() {     //speak() {
        console.log("Ahem!, Ahem!")
    }
    move(distanceInMeters: number = 1){
        console.log("The human...")
        super.move(distanceInMeters)
    }     
}

function testAnimal4(){
    //const generic : Animal3 = new Animal3("?"); // not allowed
    const Lassie : Dog4 = new Dog4("Barky");
    const Steve : Human = new Human("Steve");

    Lassie.makeSound(); //Lassie.bark();
    Lassie.move();
    Lassie.move(10);
    console.log(Lassie.waggingState);

    Steve.makeSound();  //Steve.speak();
    Steve.move(2);
    console.log(Steve.eyebrowState)

    // console.log("\nGeneric Animal class still works")
    // generic.move();
    //generic.bark();  // Generates an error


}

testAnimal4()