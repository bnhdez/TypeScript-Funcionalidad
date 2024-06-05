

export function whatsMyType(argument: any) {

    return argument;
}

const amIString = whatsMyType('Hola Mundo');

console.log( amIString.split( ' ' ) );