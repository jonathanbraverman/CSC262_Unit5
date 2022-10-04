// Declare a new class "Greeter2".
// It has three members, properties (strings called greeting & name), a constructor, and a method "greet())
var Greeter2 = /** @class */ (function () {
    function Greeter2(greeting, name, farewell) {
        this.greeting = greeting;
        this.name = name;
        this.farewell = farewell;
    }
    Greeter2.prototype.greet = function () {
        console.log(this.greeting + "My name is " + this.name);
    };
    Greeter2.prototype.saygoodbye = function () {
        console.log(this.farewell);
    };
    return Greeter2;
}());
function test2() {
    var walmartGreeter = new Greeter2("Hello, welcome to Walmart!", "Steve", "Have a great day!");
    walmartGreeter.greet();
    walmartGreeter.saygoodbye();
}
test2();
