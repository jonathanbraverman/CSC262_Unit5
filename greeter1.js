// Declare a new class "Greeter".
// It has three members, a property (string called greeting), a constructor, and a method "greet())
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        console.log(this.greeting);
    };
    return Greeter;
}());
function test() {
    var fieldval;
    var walmartGreeter = new Greeter("Hello, welcome to Walmart!");
    walmartGreeter.greet();
    fieldval = walmartGreeter.greeting;
    console.log(fieldval);
}
test();
