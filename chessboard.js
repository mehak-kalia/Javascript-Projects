var prompt = require('prompt-sync')()
const whiteSquare = "\u2B1C";
const blackSquare = "\u2B1B";
const whitequeen = "\u2655";
const blackqueen = "\u265b";
var x1 = prompt("Enter x coordinate for queen 1:");
var y1 = prompt("Enter y coordinate for queen 1:");
var x2 = prompt("Enter x coordinate for queen 2:");
var y2 = prompt("Enter y coordinate for queen 2:");
var s = ""

for(let row=0;row<8;row++){
    for(let column=0;column<8;column++){
        if((row == x1 && column == y1 | row == x2 && column == y2) && (x1 == x2 && y1 == y2))
        {
            s += whitequeen
        }
        else if(row%2 == 0){
        if(column%2 == 0){
            //console.log(whiteSquare);
            s += whiteSquare
        }else{
            //console.log(blackSquare);
            s += blackSquare
        
        }}
        else {
            if(column%2 == 0){
                //console.log(whiteSquare);
                s += blackSquare
            }else{
                //console.log(blackSquare);
                s += whiteSquare
            
            }  
        }

       
    }
    s += "\n" 
}

console.log(s);
