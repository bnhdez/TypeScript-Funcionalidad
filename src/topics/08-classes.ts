

export class Person {
    public name: string;
    private address: string;

    constructor( name: string, address: string ) {
        this.name = name;
        this.address = address;
    }
}

const ironman = new Person('Iron-Man', 'New York');

console.log(ironman);