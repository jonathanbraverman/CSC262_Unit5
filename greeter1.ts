// Declare a new class "Greeter".
// It has three members, a property (string called greeting), a constructor, and a method "greet())

class Greeter {  
    greeting : string;  // No "let" or "var"  why not?

    constructor(message : string){
        this.greeting = message;
    }

    greet() {           // No "Function" why not?
        console.log(this.greeting);
    }

}

function test()
{
    var fieldval : string;
    const walmartGreeter : Greeter = new Greeter("Hello, welcome to Walmart!")
    walmartGreeter.greet();
    fieldval = walmartGreeter.greeting;
    console.log(fieldval)
}

test()