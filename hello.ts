class Startup {
    public static main(): number {
        console.log('Hello World');
        return 0;
    }
}

Startup.main();

function f() {
    var isDoneGlobal: boolean = false;
    let isDone: boolean = false;
    let lines: number = 42;
    let name: string = "Mike";

    let y: any = 3;
    y.toString();
    let x = <string> y;
    // x = "aasd";

    let xx: any;

    const label = "Web";

    // label = "sdsd";

    let arr: number[];
    arr = [1, 2, 3];

    let arr2: Array<number>;
}


enum Color {
    red = 20,
    green = 40,
    blue = 60
}

let c: Color;
c = Color.green;
c = 2;

let aa: any[];
aa = [];
aa.push(1);
aa.push("str");
aa.push(c);
aa.push(aa);

console.log("und?", aa[3][1]);

function myFunc(): void {
    // ...
    alert("annoying box");
}

function ff(i: number) {
    return i * i;
}

let lf1: (i: number) => number = (i) => { return i + i };
let lf2;

// ...

lf2 = (i: number) => { return i + i };

// lf1("safsa");
const y = lf2(12);
lf2("12");
console.log("y", y);

interface Person {
    name: string;
    age: number;
    goHome: () => any;
    goToWork();
}

let p: Person;
p = {
    name: "Marc", age: 42, goHome: () => {
        console.log("I go");
    },
    goToWork: ()=>{/*no*/}
};


class Point {
    readonly x: number;
    y: number;

    // constructor(x: number, y: number) {
    //     this.x = x;
    //     this.y = y;
    // } 
    
    constructor(x: number, y: number, public z: number = 0, private zz = 0) {
        this.x = x;
        this.y = y;
    }

    print(): void {
        console.log("", this);
    }

    static me = "Hello";

}

let point: Point;
point = new Point(12, 13);
point = new Point(12, 13, 14);
const pz = point.z;
const st = Point.me;
// point.zz; <- unzulässig, weil private
console.log("point", point);

class PersonImpl implements Person {
    name: string;    age: number;
    goHome: () => any;
    goToWork() {
        throw new Error("Method not implemented.");
    }
}

class Pointx extends Point {
    constructor() {
        super(1, 2);
    }

    print() {
        super.print();
    }
}

class Tuple<T1, T2 extends Point> {
    constructor(public item1: T1, public item2: T2) { }
}

let tt: Tuple<number, Point>;
tt = new Tuple(1, new Point(1, 2));
tt = new Tuple(1, new Pointx());

const inst = tt.item2 instanceof Point;

const typ = typeof (tt.item1);
console.log("instanceof point? ", inst, typ);


interface P<T>{
    member: T;
}

var genFunc = function <T>(p: T) {
    return p;  
};

module Geometry{
    export class Square{

    }
}


let gg: Geometry.Square;

import G = Geometry;

let g2: G.Square;

import {You} from "./hello2"

let you: You;

const str2 = `str ${pz}
mehrere Zeilen
`;


const cc1 = "asf";
// readonly cc2 = "";

let moreNumbers: ReadonlyArray<number> = [1, 2, 3];
const mNumber = [1, 2, 3];

mNumber.push(4);
// mNumber = [1];


