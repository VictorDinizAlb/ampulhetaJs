const tam = 20;
let filledLine = "";
let topLine = "#";
let bottomLine = "#";
let empytLine = "#";

for (let i = 0; i < tam; i++){
    filledLine += "#";
    empytLine += " ";
}

topLine += filledLine + "#";
empytLine += "#";

function replaceCharacter(str, index, index2, filledLine) {
    let newStr;
    newStr = str.substr(0, index) + filledLine + str.substr(str.length - index, str.length);
    // newStr = newStr.substr(0, index2)
    return newStr;
}

function lineBuilder(currentlyLine, filledLine, tam){
    let j = currentlyLine.length - 1;
    let z = 0;
    for(let i = 1; i <= tam; i++){
        
        let sand = filledLine.substr(0, filledLine.length - z)
        
        let newLine = replaceCharacter(currentlyLine, i, j-i, sand);
        console.log(newLine);

        z = i * 2;
    }
    // console.clear();
}

console.log(topLine);
lineBuilder(empytLine, filledLine, tam);
console.log(topLine);
