// Declare a new class "Greeter3".
// It has three members, properties (strings called greeting & name), a constructor, a method greet(), and a method saygoodbye()
// public by default
class Greeter3 {  
    public greeting : string;  
    private name : string;  // make this private and see the effect
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

function test3()
{
    const tjsGreeter : Greeter3 = new Greeter3("Hello, welcome to Trader Joes!", "Avery", "Have a great day!")
    tjsGreeter.greet();
    tjsGreeter.saygoodbye();

    console.log("I can see " + tjsGreeter.name)
    
}

test3()