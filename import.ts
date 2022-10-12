// requires compiling with tsc -t 'es5' .\import.ts

import { genericClass } from "./export";

class specializedClass extends genericClass{
    field2 : string;
}

const myobject : genericClass = new genericClass;
myobject.field1 ="the field is now initialized"
console.log(myobject.field1)