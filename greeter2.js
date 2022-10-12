// Declare a new class "Greeter2".
// It has three members, properties (strings called greeting & name), a constructor, a method greet(), and a method saygoodbye()
var Greeter2 = /** @class */ (function () {
    function Greeter2(greeting, name, farewell, customerlastNames, customerNum) {
        this.customerLastNames = "Kendall";
        this.greeting = greeting;
        this.name = name;
        this.farewell = farewell;
        this.names = "Mitchell";
        this.customerLastNames = customerlastNames;
        this.customerNum = customerNum;
    }
    Greeter2.prototype.greet = function () {
        console.log(this.greeting + " " + "My name is " + this.name);
    };
    Greeter2.prototype.saygoodbye = function () {
        console.log(this.farewell);
    };
    Greeter2.prototype.lognum = function () {
        return (this.customerNum);
    };
    Greeter2.prototype.humans = function () {
        console.log(this.names);
    };
    return Greeter2;
}());
function test2() {
    var walmartGreeter = new Greeter2("Hello, welcome to Walmart!", "Steve", "Have a great day!", "Smith", 12345);
    walmartGreeter.greet();
    walmartGreeter.saygoodbye();
    console.log(walmartGreeter.lognum());
}
test2();
