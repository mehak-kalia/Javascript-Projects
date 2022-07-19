data = [10, 20, 30];

/*function getMax(array){
    let idx = 1;
    var max = array[0]
    if(idx <= array.length+1){
        if(array[idx]>max){
            max = array[idx];
            idx++;
        }else{
            idx++;
        }
    }
    console.log("Max is:"+max); 
}
*/
function getMax(numbers, length){
    // write some code here to return max using recursion

    if(length == 1){
        return numbers[0];
    }else{
        let num = getMax(numbers, length-1); // Recursion

        if(num > numbers[length-1]){
            return num;
        }else{
            return numbers[length-1];
        }
    }

}

data = [10, 20, 30];
let max = getMax(data, data.length);

console.log("Max is: "+max);

