let cislo1 = 0;
let cislo2
let display
let operandi
let vypocitan = false;
$(document).ready(() => {
    display = document.getElementById("display");

    $("#1").click(() => cislo(1));
    $("#2").click(() => cislo(2));
    $("#3").click(() => cislo(3));
    $("#4").click(() => cislo(4));
    $("#5").click(() => cislo(5));
    $("#6").click(() => cislo(6));
    $("#7").click(() => cislo(7));
    $("#8").click(() => cislo(8));
    $("#9").click(() => cislo(9));
    $("#0").click(() => cislo(0));
    $("#rovnase").click(() => vysledek());
    $("#carka").click(() => carka());
    $("#plusminus").click(() => plusminus());
    $("#plus").click(() => scitani());
    $("#minus").click(() => odcitani());
    $("#krat").click(() => nasobeni());
    $("#deleno").click(() => deleni());
    $("#c").click(() => c());
    $("#ce").click(() => ce());
    $("#bs").click(() => bs());
    $("#mocnina").click(() => mocnina());
    $("#odmocnina").click(() => odmocnina());
    $("#prevracene").click(() => prevracene());
    $("#procenta").click(() => procento());
    odeslatStatistiky("start");
}
);


function cislo(vstup) {
    if (vypocitan == true) {
        cislo2 = cislo1;
        cislo1 = vstup;
        display.innerHTML = cislo1;
        vypocitan = false;
    }
    else {
        if (cislo1 == 0) {
            cislo1 = vstup;
        }
        else {
        cislo1 = cislo1.toString() + vstup.toString();
        }
        display.innerHTML = cislo1;
    }
    odeslatStatistiky(vstup);

}

function vysledek(){
    if (operandi == "+"){
        cislo1 = Number(cislo2) + Number(cislo1);
    }else if (operandi == "-"){
        cislo1 = Number(cislo2) - Number(cislo1);
    }else if (operandi == "*"){
        cislo1 = Number(cislo2) * Number(cislo1);
    }else if (operandi == "/"){
        cislo1 = Number(cislo2) / Number(cislo1);
    }
    else{
        cislo2 = cislo1;
    }
    display.innerHTML = cislo1;
    vypocitan = true;
    odeslatStatistiky("=");
}

function scitani(){
    vysledek();
    operandi = "+";
    odeslatStatistiky("+");
}

function odcitani(){
    vysledek();
    operandi = "-";
    odeslatStatistiky("-");
}

function nasobeni(){
    vysledek();
    operandi = "*";
    odeslatStatistiky("*");
}

function deleni(){   
    vysledek();
    operandi = "/";
    odeslatStatistiky("/");
}

function plusminus(){
    cislo1 = cislo1 * -1;
    display.innerHTML = cislo1;
    odeslatStatistiky("+/-");
}

function carka(){
    cislo1 = cislo1.toString();
    for(i = 0; i < cislo1.length; i++){
        if (cislo1[i] == "."){
            return;
        }
    }
    cislo1 = cislo1 + ".";
    display.innerHTML = cislo1;
    odeslatStatistiky(",");
}

function c(){
    cislo1 = 0;
    display.innerHTML = cislo1;
    odeslatStatistiky("C");
}

function ce(){
    cislo1 = 0;
    cislo2 = 0;
    display.innerHTML = 0;
    odeslatStatistiky("CE");
}

function bs(){
    cislo1 = cislo1.toString();
    cislo1 = cislo1.substring(0, cislo1.length - 1);
    if (cislo1 == ""){
        cislo1 = 0;
    }
    display.innerHTML = cislo1;
    odeslatStatistiky("BS");
}

function mocnina(){
    cislo1 = Math.pow(cislo1, 2);
    display.innerHTML = cislo1;
    odeslatStatistiky("x²");
}

function odmocnina(){
    cislo1 = Math.sqrt(cislo1);
    display.innerHTML = cislo1;
    odeslatStatistiky("√x");
}

function prevracene(){
    cislo1 = 1 / cislo1;
    display.innerHTML = cislo1;
    odeslatStatistiky("1/x");
}

function procento(){
    cislo1 = cislo2 / 100 * cislo1;
    display.innerHTML = cislo1;
    odeslatStatistiky("%");
}


