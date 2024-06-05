

export class Person {
    //public name: string;
    //private address: string;

    constructor( public name: string, private address: string = 'No Adress' ) {}
}

export class Hero extends Person {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string
    ){
        super( realName, 'New York' )
    }
}

const ironman = new Hero('Iron-Man', 45, 'Tony Stark');

console.log(ironman);