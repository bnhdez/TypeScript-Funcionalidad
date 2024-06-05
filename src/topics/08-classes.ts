

export class Person {
    public name: string;
    private address: string;

    constructor( name: string, address: string ) {
        this.name = 'Boris';
        this.address = 'Santa Tecla';
    }
}

const ironman = new Person('Iron-Man', 'New York');

console.log(ironman);