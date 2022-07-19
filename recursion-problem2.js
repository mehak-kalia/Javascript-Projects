function printFactorial(number){
    if(number == 1 || 0){
        return 1;
    }else{
        return number*printFactorial(number-1)
    }

}

let result = printFactorial(3); // 3 * 2 * 1
console.log("Result is: "+result)