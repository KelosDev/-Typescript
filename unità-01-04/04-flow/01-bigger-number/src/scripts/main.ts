let greaterNum = (num1:number, num2:number) => {
    (num1 > num2) ? console.log(`The greater number of ${num1} and ${num2} is ${num1}`) : 
        console.log(`The greater number of ${num1} and ${num2} is ${num2}`); 
}

greaterNum(2,5);
greaterNum(20,5);