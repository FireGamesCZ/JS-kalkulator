const e = require('express');
const express = require('express');

const app = express();

app.use(express.json());
app.use(express.static('./www'));

const JSONDB = require('simple-json-db');
const db = new JSONDB('./data/statistiky.json');

app.get("/statistiky/cteni", (req, res) => {
    const typ = req.query.typ.trim();

    let statistiky = db.JSON()[typ];

    if (statistiky == undefined) {
        statistiky = {};
    }

    res.json(statistiky);
});

app.post("/statistiky/zapis", (req, res) => {
    const znak = req.body.znak;
    const typ = req.body.typ;

    if(!db.has(typ)) {
        db.set(typ, {});
    }

    let statistiky = db.JSON()[typ];

    if (Object.keys(statistiky).includes(znak.toString())) {
        statistiky[znak.toString()]++;
    }
    else {
        statistiky[znak.toString()] = 1;
    }

    db.set(typ, statistiky);

    res.json(statistiky);
});



module.exports = app;