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
var Animal4 = /** @class */ (function () {
    function Animal4(theName) {
        this.name = theName;
    }
    Animal4.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("Animal moved " + distanceInMeters + " meters");
    };
    return Animal4;
}());
// Inheritance Example 2 - Overloading constructor and method
var Dog4 = /** @class */ (function (_super) {
    __extends(Dog4, _super);
    function Dog4(theName) {
        var _this = _super.call(this, theName) || this;
        _this.legs = 4; // We can set the number of legs since we know what this animal has
        _this.waggingState = "Wagging";
        return _this;
    }
    Dog4.prototype.makeSound = function () {
        console.log("Woof! Woof!");
    };
    Dog4.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Dog moved " + distanceInMeters + " meters");
    };
    return Dog4;
}(Animal4));
var Human = /** @class */ (function (_super) {
    __extends(Human, _super);
    function Human(theName) {
        var _this = _super.call(this, theName) || this;
        _this.legs = 2; // We can set the number of legs since we know what this animal has
        _this.eyebrowState = "raised";
        return _this;
    }
    Human.prototype.makeSound = function () {
        console.log("Ahem!, Ahem!");
    };
    Human.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 1; }
        console.log("The human...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Human;
}(Animal4));
function testAnimal4() {
    //const generic : Animal3 = new Animal3("?"); // not allowed
    var Lassie = new Dog4("Barky");
    var Steve = new Human("Steve");
    Lassie.makeSound(); //Lassie.bark();
    Lassie.move();
    Lassie.move(10);
    console.log(Lassie.waggingState);
    Steve.makeSound(); //Steve.speak();
    Steve.move(2);
    console.log(Steve.eyebrowState);
    // console.log("\nGeneric Animal class still works")
    // generic.move();
    //generic.bark();  // Generates an error
}
testAnimal4();
