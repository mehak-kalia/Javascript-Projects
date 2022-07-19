// A block of statements executed in a sequence

function f(x){
    let y = x*x+1;
    console.log("y is: "+y);
}

// Execute/Call/Run
f(1)
f(2)
f(5)


function register(name, email, password){
    console.log("Registering...."+email);
    console.log("Thank you"+name+"for registering");
}

function bookCab(pickupLocation, dropLocation, typeofCab, distance){
    let baseFare = 50;

    if(typeofCab == 1){
        basefare += 8*distance
    }
    else if(typeofCab == 2){
        basefare += 50
        basefare += 10*distance
        
    }
    else if(typeofCab == 3){
        base
    }
}