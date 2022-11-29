let cislo1 = 0;
let cislo2 = 0;
var display = document.getElementById("display");
let operandi

function cislo(vstup) {
    if(cislo1 == 0){
        cislo1 = vstup;
    }else{
    cislo1 = cislo1 + vstup.toString();}
    display.innerHTML = cislo1;
}

function operace(vyber){
    cislo2 = cislo1;
    cislo1 = 0;
    display.innerHTML = cislo2;
    operandi = vyber;
}

function vysledek(){
    if(operandi == "+"){
        cislo2 = parseInt(cislo1) + parseInt(cislo2);
        display.innerHTML = cislo2;
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