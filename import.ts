// requires compiling with tsc -t 'es5' .\import.ts

import { genericClass } from "./export";

class specializedClass extends genericClass{
    field2 : string;
}