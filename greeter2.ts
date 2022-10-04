// Declare a new class "Greeter2".
// It has three members, properties (strings called greeting & name), a constructor, a method greet(), and a method saygoodbye()
class Greeter2 {  
    greeting : string;
    name : string;
    farewell: string;

    constructor(greeting : string, name: string, farewell: string){
        this.greeting = greeting;
        this.name = name;
        this.farewell = farewell;
    }

    greet() {
        console.log(this.greeting + " " + "My name is " + this.name);
    }

    saygoodbye() {
        console.log(this.farewell);
    }
}

function test2()
{
    const walmartGreeter : Greeter2 = new Greeter2("Hello, welcome to Walmart!", "Steve", "Have a great day!")
    walmartGreeter.greet();
    walmartGreeter.saygoodbye();
    
}

test2()