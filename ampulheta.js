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

function fillWithSand(str, index, index2, filledLine) {
    let newStr;
    newStr = str.substr(0, index) + filledLine + str.substr(str.length - index, str.length);
    // newStr = newStr.substr(0, index2)
    return newStr;
}

function replaceCharacter(str, index, index2) {
    let char = "#"
    let newStr;
    newStr = str.substr(0, index) + char + str.substr(index + char.length);
    newStr = newStr.substr(0, index2) + char + str.substr(index2 + char.length);
    return newStr;
}

function topSideBuilder(currentlyLine, filledLine, tam){
    let j = currentlyLine.length - 1;
    let z = 0;
    for(let i = 1; i <= tam/2; i++){
        
        let sand = filledLine.substr(0, filledLine.length - z)
        
        let newLine = fillWithSand(currentlyLine, i, j-i, sand);
        console.log(newLine);

        z = i * 2;
    }
    // console.clear();
}

function botSideBuilder(currentlyLine, tam){
    let j = currentlyLine.length - 1;
    let z = tam/2;
    for(let i = tam/2; i >= 1; i--){
        let newLine = replaceCharacter(currentlyLine, i, j-i);
        console.log(newLine);

        z = i / 2;
    }
}

console.log(topLine);
topSideBuilder(empytLine, filledLine, tam);
botSideBuilder(empytLine, tam);
console.log(topLine);
