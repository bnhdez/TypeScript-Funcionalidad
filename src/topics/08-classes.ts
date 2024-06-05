

export class Person {
    //public name: string;
    //private address: string;

    constructor( public name: string, private address: string = 'No Adress' ) {}
}

const ironman = new Person('Iron-Man');

console.log(ironman);