const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0].split("").map(e => {
        if(e === e.toLowerCase()) return e.toUpperCase()
        else return e.toLowerCase();
    }).join("")
    
    console.log(str)
});