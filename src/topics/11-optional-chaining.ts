

export interface Passanger {
    name: string,
    children?: string[],
}

const passenger1: Passanger = {
    name: 'Boris',
}

const passenger2: Passanger = {
    name: 'Melissa',
    children: ['Natalia', 'Elizabeth']
}

const printChildren = ( passenger: Passanger ) => {

    const howManyChildren = passenger.children?.length;

    console.log(passenger.name, howManyChildren);
}

printChildren( passenger1 );