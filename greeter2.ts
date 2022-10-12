// Declare a new class "Greeter2".
// It has three members, properties (strings called greeting & name), a constructor, a method greet(), and a method saygoodbye()
class Greeter2 {  
    greeting : string;
    name : string;
    farewell: string;
    names : string;
    customerLastNames: string = "Kendall";
    customerNum : number;

    constructor(greeting : string, name: string, farewell: string, 
        customerlastNames: string, customerNum:number){
        this.greeting = greeting;
        this.name = name;
        this.farewell = farewell;
        this.names = "Mitchell"
        this.customerLastNames = customerlastNames;
        this.customerNum = customerNum;

    }

    greet() {
        console.log(this.greeting + " " + "My name is " + this.name);
    }

    saygoodbye() {
        console.log(this.farewell);
    }

    lognum():number
    {
        return (this.customerNum)
    }

    humans(){
        console.log(this.names)
    }

}

function test2()
{
    const walmartGreeter : Greeter2 = new Greeter2("Hello, welcome to Walmart!", "Steve", "Have a great day!", "Smith", 12345)
    walmartGreeter.greet();
    walmartGreeter.saygoodbye();
    console.log(walmartGreeter.lognum());
}

test2()