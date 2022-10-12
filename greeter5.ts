// Declare a new class "Greeter5".
// It has three members, properties (strings called greeting & name), a constructor, a method greet(), and a method saygoodbye()
// public by default, except name  tsc -t es5 
// static property - part of the class itself
class Greeter5 {  
    static job  : string = "Greeting"
    greeting : string;  
    protected name : string;  
    farewell: string;

    constructor(greeting : string, name: string, farewell: string){  // this could be protected as well to prevent non-derived class instantiation
        this.greeting = greeting;
        this.name = name;
        this.farewell = farewell;
        Greeter5.job = "Greeting!"
    }

    // Accessors are only available when targeting ECMAScript 5 and higher. tsc -t es5
    get greetername(): string {
         return this.name;
    }

    set greetername(newName : string){
         if(newName.length < 50)
             this.name = newName;
    }
    
    greet() {
        console.log(this.greeting + " " + "My name is " + this.name);
        console.log("My job is " + Greeter5.job);
    }

    saygoodbye() {
        console.log(this.farewell);
    }
}

class tjsGreeter extends Greeter5 {
    constructor(name: string)
    {
        super("Hello, welcome to Trader Joes!", name, "Have a great day!")
        console.log("I can see Greeter5's name in the derived class constructor " + this.name + "\n")
    }
}


function test5()
{
    const Avery : tjsGreeter = new tjsGreeter("Avery")
    Avery.greet();
    Avery.saygoodbye();
    console.log("I can now see Avery's name in the test function " + Avery.greetername + "\n")      // Getter allows getting this value
    Avery.greetername = "Averry";
    console.log("Averry's fixed name " + Avery.greetername)      // Getter allows getting this value
}

test5()