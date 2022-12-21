function odeslatStatistiky(znak, typ = "cisla") {
    fetch("/statistiky/zapis", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            znak: znak,
            typ: typ
        })
    })
    .then(res => res.json())
    .then(statistiky => {
        if(typ == "cisla") {
            zapsatStatistiky(statistiky);
        }
        
    })
}

function ziskatStatistiky(typ = "cisla") {
    fetch("/statistiky/cteni?typ=" + typ, {
        method: "GET",
    })
    .then(res => res.json())
    .then(statistiky => {
        if(typ == "cisla") {
            zapsatStatistiky(statistiky);
        }
        
    })
}

function zapsatStatistiky(data, typ = "cisla") {
    const cisla = Object.keys(data);
    let html = "";

    cisla.forEach(cislo => {
        if(cislo != "start") {
        html += `<div>Na číslo <b>${cislo}</b> se kliklo <b>${data[cislo]}×</b></div>`;
        }
    });

    $("#statistiky").html(html);
}