

function addNumbers(a:number, b:number){
    return a + b;
}

const addNumbersArrow = (a:number, b:number):string => {
    return `${ a + b }`;
}

const result:number = addNumbers(1, 2);
const result2:string = addNumbersArrow(1, 2);

console.log({result, result2});

export {};