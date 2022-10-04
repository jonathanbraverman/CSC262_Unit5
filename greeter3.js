// Declare a new class "Greeter3".
// It has three members, properties (strings called greeting & name), a constructor, a method greet(), and a method saygoodbye()
var Greeter3 = /** @class */ (function () {
    function Greeter3(greeting, name, farewell) {
        this.greeting = greeting;
        this.name = name;
        this.farewell = farewell;
    }
    Greeter3.prototype.greet = function () {
        console.log(this.greeting + " " + "My name is " + this.name);
    };
    Greeter3.prototype.saygoodbye = function () {
        console.log(this.farewell);
    };
    return Greeter3;
}());
function test3() {
    var tjsGreeter = new Greeter3("Hello, welcome to Trader Joes!", "Avery", "Have a great day!");
    tjsGreeter.greet();
    tjsGreeter.saygoodbye();
    console.log(tjsGreeter.name);
}
test3();
