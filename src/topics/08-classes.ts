

export class Person {
    public name: string;
    private address: string;

    constructor() {
        this.name = 'Boris';
        this.address = 'Santa Tecla';
    }
}

const ironman = new Person();

console.log(ironman.address);