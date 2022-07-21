let addLocalNumbers = (locA: number, locB: number) => {
    let result: number = locA + locB;
    console.log(`local result is ${result}`);
    return result;
}

addLocalNumbers(2, 3);

let globalResult:number;

let addGlobalNumbers = (globA:number, globB:number) => {
    globalResult = globA + globB;
    return globalResult;
}
// console.log(`global result is ${globalResult}`); 
addGlobalNumbers(7, 7);


