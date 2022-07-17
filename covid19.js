let states = [
    {
        name: "Andaman and Nicobar",
        total: 46,
        change: 3,
        cumulative: 10095
    },
    {
        name: "Andhra Pradesh",
        total: 79,
        change: 3,
        cumulative: 2308349
    },
    {
        name: "Arunachal Pradesh",
        total: 205,
        change: 6,
        cumulative: 64291
    },
    {
        name: "Assam",
        total: 2584,
        change: 399,
        cumulative: 717333
    },
    {
        name: "Bihar",
        total: 46,
        change: 3,
        cumulative: 10095
    }

]

for(let idx=0; idx<states.length;idx++){
    console.log("~~~~~~~~~~~~~~~~~~");
    console.log(states[idx]["name"])
    console.log(states[idx]["total"])
    console.log(states[idx]["change"])
    console.log(states[idx]["cumulative"])
    console.log("~~~~~~~~~~~~~~~~~~");

}