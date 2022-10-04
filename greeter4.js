var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Declare a new class "Greeter4".
// It has three members, properties (strings called greeting & name), a constructor, a method greet(), and a method saygoodbye()
// public by default, except name
var Greeter4 = /** @class */ (function () {
    function Greeter4(greeting, name, farewell) {
        this.greeting = greeting;
        this.name = name;
        this.farewell = farewell;
    }
    Greeter4.prototype.greet = function () {
        console.log(this.greeting + " " + "My name is " + this.name);
    };
    Greeter4.prototype.saygoodbye = function () {
        console.log(this.farewell);
    };
    return Greeter4;
}());
var tjsGreeter = /** @class */ (function (_super) {
    __extends(tjsGreeter, _super);
    function tjsGreeter(name) {
        var _this = _super.call(this, "Hello, welcome to Trader Joes!", name, "Have a great day!") || this;
        console.log("I can't see Greeter4's name" + _this.name);
        return _this;
    }
    return tjsGreeter;
}(Greeter4));
function test4() {
    var Avery = new tjsGreeter("Avery");
    Avery.greet();
    Avery.saygoodbye();
    //console.log("I can't see Avery's name" + Avery.name)
}
test4();
