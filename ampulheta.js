const tam = 10;
let topLine = "#";
let bottomLine = "#";

for (let i = 0; i <= tam; i++){
    topLine += "#";
}

topLine += "#";

// for (let i = 0; i < tam + 1; i++){
//     console.log(topLine);
//     let topLine = topLine.substring(3, topLine.length - 3)

// }

console.log(topLine);
topLine = topLine.substring(3, topLine.length - 3)
console.log(topLine);
