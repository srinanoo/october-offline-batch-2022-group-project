let calPoints = function(ops) {
    let result = 0;
    let temp = [];
    
    ops.forEach(v => {
        console.log("v - ", v);
        // console.log(Number.isInteger(parseInt(v)));
        if(Number.isInteger(parseInt(v))) {
            temp.push(parseInt(v));
            // console.log("temp 1 - ", temp);
        }
        if(v === "C") {
            temp.pop();
            // console.log("temp 2 - ", temp);
        }
        if(v === "D") {
            temp.push(temp.slice(-1)*2);
            // console.log("temp 3 - ", temp);
        }
        if(v === "+") {
            temp.push(parseInt(temp.slice(-1))+parseInt(temp.slice(-2)));
            // console.log("temp 4 - ", temp);
        }
    });
    console.log(temp);

    return temp.reduce((pv, v) => pv+v);
}

// let ops = ["5", "2", "C", "D", "+"];
let ops = ["5", "-2", "4", "C", "D", "9", "+", "+"];
// let ops = ["1"];
// ops = ops.split(" ");

console.log(calPoints(ops));