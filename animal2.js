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
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("Animal moved " + distanceInMeters + " meters");
    };
    return Animal;
}());
// Inheritance Example 2 - Overloading constructor and method
var Dog2 = /** @class */ (function (_super) {
    __extends(Dog2, _super);
    function Dog2(theName) {
        var _this = _super.call(this, theName) || this;
        _this.legs = 4; // We can set the number of legs since we know what this animal has
        return _this;
    }
    Dog2.prototype.bark = function () {
        console.log("Woof! Woof!");
    };
    Dog2.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Dog moved " + distanceInMeters + " meters");
    };
    return Dog2;
}(Animal));
var Human = /** @class */ (function (_super) {
    __extends(Human, _super);
    function Human(theName) {
        var _this = _super.call(this, theName) || this;
        _this.legs = 2; // We can set the number of legs since we know what this animal has
        return _this;
    }
    Human.prototype.speak = function () {
        console.log("Ahem!, Ahem!");
    };
    Human.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 1; }
        console.log("The human...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Human;
}(Animal));
function testAnimal2() {
    var generic = new Animal("?");
    var Lassie = new Dog2("Barky");
    var Steve = new Human("Steve");
    Lassie.bark();
    Lassie.move();
    Lassie.move(10);
    Steve.speak();
    Steve.move(2);
    console.log("\nGeneric Animal class still works");
    generic.move();
    //generic.bark();  // Generates an error
}
testAnimal2();
