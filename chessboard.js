var prompt = require('prompt-sync')()
const whiteSquare = "\u2B1C";
const blackSquare = "\u2B1B";
const whitequeen = "\u2655";
//const blackqueen = "\u265b";
var x1 = Number(prompt("Enter x coordinate for queen 1:"));
var y1 = Number(prompt("Enter y coordinate for queen 1:"));
var x2 = Number(prompt("Enter x coordinate for queen 2:"));
var y2 = Number(prompt("Enter y coordinate for queen 2:"));
var s = ""

for(let row=0;row<8;row++){
    for(let column=0;column<8;column++){
        if((x1 == row && y1 == column || x2 == row && y2 == column)){
         if(x1 != x2 && y1 != y2)
        {
            s = s + whitequeen
        }
        else{
            if(x1 == x2){
            console.log("ROWS ENTERED ARE SAME")
            }
            else if(y1 == y2){
            console.log("COLUMNS ENTERED ARE SAME");
            }
            else {
            console.log("BOTH ROWS AND COLUMNS ENTERED ARE SAME");
            }
        }
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
//console.log(whitequeen);

//console.log(x1, y1, x2, y2)
