function sortNumbers(numbers){

    let n = numbers.length;
    for(let i=0;i<n;i++){
        for(let j=0;j<n-i-1;j++){
            if(numbers[j]>numbers[j+1]){
                temp = numbers[j];
                numbers[j] = numbers[j+1];
                numbers[j+1] = numbers[j];
            }
        }
    }

}

data = [7, 4, 1, 9, 2]
console.log("DATA BEFORE: "+data);
sortNumbers(data);
console.log("DATA BEFORE: "+data);

let products