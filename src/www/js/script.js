let cislo1 = 0;
let cislo2 = 0;
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

function operace(vyber){
    if(cislo2 == 0){
        cislo2 = cislo1;
        cislo1 = 0;
        operandi = vyber;
    }else{
        vysledek();
        cislo2 = cislo1;
        cislo1 = 0;
        operandi = vyber;
    }
}

function vysledek(){
    if(operandi == "+"){
        cislo2 = parseFloat(cislo1) + parseFloat(cislo2);
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
    cislo1 = substring(0, cislo1.length - 1);
    display.innerHTML = cislo1;
}