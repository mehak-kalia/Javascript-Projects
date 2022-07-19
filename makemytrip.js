var prompt = require('prompt-sync')();

flight1 = {
    name: "Go First",
    from: "New Delhi",
    to: "Bengaluru",
    date: "19th July 2022",
    departure: "05:50",
    arrival: "08:35",
    price: 7423,
    type: 3, // 1 -> non stop, 2 -> one stop, 3 -> multiple stops
    promo: [
        {
            code: "FLIGHT50",
            discount: 0.5
            
        },
        {
            code: "NEW20",
            discount: 0.2
            
        }
    ]
}

flight2 = {
    name: "SpiceJet",
    from: "Mumbai",
    to: "Bengaluru",
    date: "19th July 2022",
    departure: "06:30",
    arrival: "18:35",
    price: 8050,
    type: 1, // 1 -> non stop, 2 -> one stop, 3 -> multiple stops
    promo: [
        {
            code: "FLIGHT50",
            discount: 0.5
            
        },
        {
            code: "SUMMER40",
            discount: 0.4
            
        }
    ]
}

flight3 = {
    name: "Indigo",
    from: "New Delhi",
    to: "Canada",
    date: "19th July 2022",
    departure: "12:00",
    arrival: "18:35",
    price: 50000,
    type: 3, // 1 -> non stop, 2 -> one stop, 3 -> multiple stops
    promo: [
        {
            code: "FLIGHT50",
            discount: 0.5
            
        },
    ]
}

flight4 = {
    name: "Air India",
    from: "New Delhi",
    to: "Australia",
    date: "20th July 2022",
    departure: "11:40",
    arrival: "08:35",
    price: 74030,
    type: 1, // 1 -> non stop, 2 -> one stop, 3 -> multiple stops
    promo: [

        {
            code: "NEW20",
            discount: 0.2
            
        }
    ]
}

flight5 = {
    name: "Air Asia",
    from: "New Delhi",
    to: "Europe",
    date: "21th July 2022",
    departure: "9:30",
    arrival: "18:50",
    price: 80000,
    type: 2, // 1 -> non stop, 2 -> one stop, 3 -> multiple stops
    promo: [

        {
            code: "NEW20",
            discount: 0.2
            
        },
        {
            code: "SUMMER40",
            discount: 0.4
            
        }
    ]
}

trip = [flight1, flight2, flight3, flight4, flight5];

console.table(trip);

let choice = "yes";

while(choice == "yes"){

    options = ["Filter by type of flight", "Search by promocode", "Sort by prices"];
    console.table(options);

    let option = Number(prompt(" Select an Option (0, 1 or 2): "))

    if(option == 0){
        FilterByType()

    }else if(option == 1){
        SearchByPromo('NEW20')

    }else if(option == 2){
        SortByprice()

    }else {
        console.log("Invalid Option");
    }
  choice = prompt("Would You Like to continue: yes/no ");
}

function FilterByType(){

}

function SearchByPromo(PromoCode){

    console.log("Searching Flights by "+PromoCode);
    // for each loop
    for(let flight of trip ){
        for(let data of flight['promo']){
            if (data['code'].includes(PromoCode)){
                console.table(flight);
            }
        }
    }
}

function SortByprice(){

    // Bubble Sort
}