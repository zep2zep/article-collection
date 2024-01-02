// File: server.js

const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Leggi i tips attuali dal file
let tipsData = require("./database/tips.js");

// Endpoint per aggiungere un nuovo tip
app.post("/api/addTip", (req, res) => {
  const newTip = {
    id: tipsData.tips.length + 1, // Genera un nuovo ID incrementale
    title: req.body.title,
    sintax: req.body.sintax,
    code: req.body.code,
  };

  // Aggiungi il nuovo tip ai dati esistenti
  tipsData.tips.push(newTip);

  // Scrivi i nuovi tips nel file tips.js
  fs.writeFileSync(
    "./database/tips.js",
    `export const tips = ${JSON.stringify(tipsData, null, 2)};`,
  );

  res.status(200).json({ message: "Tip aggiunto con successo", newTip });
});

const PORT = 3001; // Porta su cui il server ascolta
app.listen(PORT, () => {
  console.log(`Server avviato sulla porta ${PORT}`);
});
