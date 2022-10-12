// Declare a new class "Greeter4".
// It has three members, properties (strings called greeting & name), a constructor, a method greet(), and a method saygoodbye()
// public by default, except name
class Greeter4 {  
    greeting : string;  
    protected name : string;  
    farewell: string;

    constructor(greeting : string, name: string, farewell: string){  // this could be protected as well to prevent non-derived class instantiation
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

class tjsGreeter extends Greeter4 {
    constructor(name: string)
    {
        super("Hello, welcome to Trader Joes!", name, "Have a great day!")
        console.log("I can't see Greeter4's name" + this.name)
    }
}


function test4()
{
    const Avery : tjsGreeter = new tjsGreeter("Avery")
    Avery.greet();
    Avery.saygoodbye();

    console.log("I can't see Avery's name" + Avery.name)      // Still can't see the protected member outside of the class/objects
    
}

test4()