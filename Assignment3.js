var prompt = require('prompt-sync')()

let noOfBricks = Number(prompt("Enter Required No. Of Bricks:"));

function brickInWall(input){
let bricksPlaced = 0
let johnTurn = 1

while(bricksPlaced<input){

    // // for(let i =0; i<noOfBricks; i++){
    //     bricksPlaced+= 1
    //     bricksPlaced += 2
    //     console.log(bricksPlaced);
        

    // // }
    //let noOfTurns = 1
    
    //console.log("i is:"+i);

    
    bricksPlaced += johnTurn
    let initialbricks = bricksPlaced-johnTurn
    if(bricksPlaced>=input){
        console.log("working1");
        let init = johnTurn + (input - bricksPlaced) 
        bricksPlaced += (input - bricksPlaced)
        console.log("Johns turn"+initialbricks +"+"+ init+"="+bricksPlaced);
        console.log("Last Brick Planted by John");
        let jackTurn = johnTurn-1
        console.log("No. Of Turns\nJohn: "+johnTurn+"\nJack: "+jackTurn);
        break
    }
    //let initialbricks = bricksPlaced-johnTurn
    console.log("Johns turn"+initialbricks +"+"+ johnTurn+"="+bricksPlaced);

    bricksPlaced += johnTurn*2
    let initialbricks2 = bricksPlaced -(johnTurn*2)
    if(bricksPlaced>=input){
        console.log("working3");
        let init2 = johnTurn*2 + (input - bricksPlaced);
        bricksPlaced += (input - bricksPlaced)
        console.log("Jacks turn "+initialbricks2 +"+"+ init2+"="+bricksPlaced);
        console.log("Last Brick Planted by Jack");
        console.log("No. Of Turns\nJohn: "+johnTurn+"\nJack: "+johnTurn);
        break
    }
    //let initialbricks2 = bricksPlaced -(johnTurn*2)
    console.log("Jacks turn "+initialbricks2 +"+"+ johnTurn*2+"="+bricksPlaced);
    


    johnTurn += 1;

}

console.log(bricksPlaced);}

brickInWall(noOfBricks);