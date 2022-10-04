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
// Declare a new class "Greeter5".
// It has three members, properties (strings called greeting & name), a constructor, a method greet(), and a method saygoodbye()
// public by default, except name
// static property - part of the class itself
var Greeter5 = /** @class */ (function () {
    function Greeter5(greeting, name, farewell) {
        this.greeting = greeting;
        this.name = name;
        this.farewell = farewell;
    }
    Object.defineProperty(Greeter5.prototype, "greetername", {
        // Accessors are only available when targeting ECMAScript 5 and higher. tsc -t es5
        get: function () {
            return this.name;
        },
        set: function (newName) {
            if (newName.length < 50)
                this.name = newName;
        },
        enumerable: false,
        configurable: true
    });
    Greeter5.prototype.greet = function () {
        console.log(this.greeting + " " + "My name is " + this.name);
        console.log("My job is " + Greeter5.job);
    };
    Greeter5.prototype.saygoodbye = function () {
        console.log(this.farewell);
    };
    Greeter5.job = "Greeting";
    return Greeter5;
}());
var tjsGreeter = /** @class */ (function (_super) {
    __extends(tjsGreeter, _super);
    function tjsGreeter(name) {
        var _this = _super.call(this, "Hello, welcome to Trader Joes!", name, "Have a great day!") || this;
        console.log("I can see Greeter5's name in the derived class constructor " + _this.name + "\n");
        return _this;
    }
    return tjsGreeter;
}(Greeter5));
function test5() {
    var Avery = new tjsGreeter("Avery");
    Avery.greet();
    Avery.saygoodbye();
    console.log("I can now see Avery's name in the test function " + Avery.greetername + "\n"); // Getter allows getting this value
    Avery.greetername = "Averry";
    console.log("Averry's fixed name " + Avery.greetername); // Getter allows getting this value
}
test5();
