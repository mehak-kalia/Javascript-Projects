let menu = [
    {
        name: "Mc Aloo Tikki",
        ratings: 4.1,
        price: 225.5
    },
    {
        name: "Pizza McPuff",
        ratings: 5,
        price: 220
    }
]

for(let idx=0; idx<menu.length;idx++){
    console.log("~~~~~~~~~~~~~~~~~~");
    console.log(menu[idx]["name"])
    console.log(menu[idx]["ratings"])
    console.log(menu[idx]["price"])
    console.log("~~~~~~~~~~~~~~~~~~");

}