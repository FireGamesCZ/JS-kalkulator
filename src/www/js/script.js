let cislo1 = 0;
let cislo2
var display = document.getElementById("display");
let operandi
let vypocitan = false;

function cislo(vstup) {
    if (vypocitan == true){
        cislo1 = 0;
        vypocitan = false;
    }
    if(cislo1 == 0){
        cislo1 = vstup;
    }else{
    cislo1 = cislo1 + vstup.toString();}
    display.innerHTML = cislo1;
}

function scitani(){
    if (cislo2 == 0 && vypocitan==false){
        cislo2 = cislo1;
        cislo1 = 0;
        operandi = "+";}
    else{
        vysledek();
        operandi = "+";
        cislo1 = 0;
    }
}

function odcitani(){
    if (cislo2 == 0){
        cislo2 = cislo1;
        cislo1 = 0;
        operandi = "-";}
    else{
        vysledek();
        operandi = "-";
        cislo1 = 0;
    }
}

function nasobeni(){
    if (cislo2 == 0){
        cislo2 = cislo1;
        cislo1 = 0;
        operandi = "*";}
    else{
        vysledek();
        operandi = "*";
        cislo1 = 0;
    }
}

function deleni(){
    if (cislo2 == 0){
        cislo2 = cislo1;
        cislo1 = 0;
        operandi = "/";}
    else{
        vysledek();
        operandi = "/";
        cislo1 = 0;
    }
}

function vysledek(){
    if(operandi == "+"){
        cislo2 = parseFloat(cislo1) + parseFloat(cislo2);
        display.innerHTML = cislo2;
        vypocitan = true;
    }
    else if(operandi == "-"){
        cislo2 = parseFloat(cislo2) - parseFloat(cislo1);
        display.innerHTML = cislo2;
        vypocitan = true;
    }
    else if(operandi == "*"){
        cislo2 = parseFloat(cislo2) * parseFloat(cislo1);
        display.innerHTML = cislo2;
        vypocitan = true;
    }
    else if(operandi == "/"){
        cislo2 = parseFloat(cislo2) / parseFloat(cislo1);
        display.innerHTML = cislo2;
        vypocitan = true;
    }

}

function plusminus(){
    cislo1 = cislo1 * -1;
    display.innerHTML = cislo1;
}

function carka(){
    cislo1 = cislo1 + ".";
    display.innerHTML = cislo1;
}

function c(){
    cislo1 = 0;
    display.innerHTML = cislo1;
}

function ce(){
    cislo1 = 0;
    cislo2 = 0;
    display.innerHTML = 0;
}

function bs(){
    cislo1 = cislo1.toString();
    cislo1 = cislo1.substring(0, cislo1.length - 1);
    if (cislo1 == ""){
        cislo1 = 0;
    }
    display.innerHTML = cislo1;
}

function mocnina(){
    cislo1 = Math.pow(cislo1, 2);
    display.innerHTML = cislo1;
}

function odmocnina(){
    cislo1 = Math.sqrt(cislo1);
    display.innerHTML = cislo1;
}

function prevracene(){
    cislo1 = 1 / cislo1;
    display.innerHTML = cislo1;
}

function procento(){
    cislo1 = cislo2 / 100 * cislo1;
    display.innerHTML = cislo1;
}