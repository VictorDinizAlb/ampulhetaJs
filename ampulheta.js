// pacote para ler input no console
var readlineSync = require('readline-sync');

var tam = readlineSync.question('Digite o tamanho da ampulheta. Ex: 20\n');
let filledLine = "";

// as variáveis ja são iniciadas com '#' para preencher as bordas da ampulheta
let borderLine = "#";
let empytLine = "#";

// constroi as linhas cheias e vazias
for (let i = 0; i < tam; i++){
    filledLine += "#";
    empytLine += " ";
}

// preenche a borda direita da ampulheta
borderLine += filledLine + "#";
empytLine += "#";


// funções para printar o primeiro estado da ampulheta

//preenche as linhas com areia
function fillWithSand(str, index, index2, filledLine) {
    let newStr;
    newStr = str.substring(0, index) + filledLine + str.substring(str.length - index, str.length);
    return newStr;
}

//constroi as linhas da ampulheta sem areia
function replaceCharacter(str, index, index2) {

    let char = "#"
    let newStr;
    newStr = str.substring(0, index) + char + str.substring(index + char.length);
    newStr = newStr.substring(0, index2) + char + str.substring(index2 + char.length);
    return newStr;
}

function topSide(currentlyLine, filledLine, tam){
    let j = currentlyLine.length - 1;
    let z = 0;
    for(let i = 1; i <= tam/2; i++){
        
        let sand = filledLine.substring(0, filledLine.length - z)
        
        let newLine = fillWithSand(currentlyLine, i, j-i, sand);
        console.log(newLine);

        z = i * 2;
    }
}

function botSide(currentlyLine, tam){
    let j = currentlyLine.length - 1;
    let z = tam/2;
    for(let i = Math.round(tam/2); i >= 1; i--){
        let newLine = replaceCharacter(currentlyLine, i, j-i);
        console.log(newLine);

        z = i / 2;
    }
}

// funções para imprimir o estado final da ampulheta

function fillWithSand2(str, index, index2, fillingLine) {
    let newStr;
    newStr = str.substring(0, index) + fillingLine + str.substring(str.length - index, str.length);
    return newStr;
}

function topSideAfter(currentlyLine, tam){
    let j = currentlyLine.length - 1;
    let z = 0;
    for(let i = 1; i <= tam/2; i++){
        let newLine = replaceCharacter(currentlyLine, i, j-i);
        console.log(newLine);

        z = i * 2;
    }
}

function botSideAfter(currentlyLine, tam){
    if(tam % 2 == 1){
        sand = "#";
        tam++;
    } else {
        sand = "##";
    }
    
    let j = currentlyLine.length - 1;
    let z = tam/2;

    for(let i = tam/2; i >= 1; i--){
        
        let newLine = fillWithSand2(currentlyLine, i, j-i, sand);
        console.log(newLine);

        sand += "##"
        z = Math.round(i / 2);
    }
}

function initalPrint(){
    console.log(borderLine);
    topSide(empytLine, filledLine, tam);
    botSide(empytLine, tam);
    console.log("n = ", tam);
    console.log(borderLine);
}

function finalPrint(){
    console.log(borderLine);
    topSideAfter(empytLine, tam);
    botSideAfter(empytLine, tam);
    console.log(borderLine);
    console.log("n = ", tam);
}

initalPrint();
console.log("\n\n");
finalPrint();
