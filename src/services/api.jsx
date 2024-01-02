const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());

let tips = require('./database/tips').tips; // Importa i tips dal file tips.js

app.post('/addTip', (req, res) => {
  const { title, sintax, code } = req.body;

  const maxId = Math.max(...tips.map((tip) => tip.id), 0);
  const newTipId = maxId + 1;

  const newTip = {
    id: newTipId,
    title: title,
    sintax: sintax,
    code: code,
  };

  tips.push(newTip);

  // Aggiorna il file tips.js con i nuovi dati
  const fileContent = `export const tips = ${JSON.stringify(tips, null, 2)};\n`;

  fs.writeFile('./database/tips.js', fileContent, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Errore durante l'aggiornamento del file.");
    } else {
      res
        .status(200)
        .send('Nuovo tip aggiunto e file aggiornato correttamente.');
    }
  });
});

app.listen(3000, () => {
  console.log('Server in ascolto sulla porta 3000');
});
