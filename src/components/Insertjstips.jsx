import { useState } from 'react';
import { tips } from '../database/tips';

const InsertJSTips = () => {
  const [title, setTitle] = useState('');
  const [sintax, setSintax] = useState('');
  const [code, setCode] = useState('');
  console.log('Nuovo Tip:', tips);
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSintaxChange = (event) => {
    setSintax(event.target.value);
  };

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const maxId = Math.max(...tips.map((tip) => tip.id), 0);
    const newTipId = maxId + 1;

    const newTip = {
      id: newTipId,
      title: title,
      sintax: sintax,
      code: code,
    };

    // Ottieni l'array esistente dai dati salvati in localStorage
    const existingTips = JSON.parse(localStorage.getItem('tips')) || [];

    // Aggiungi il nuovo tip all'array
    existingTips.push(newTip);

    // Salva l'array aggiornato in localStorage
    localStorage.setItem('tips', JSON.stringify(existingTips));

    // Effettua un log per verificare il nuovo tip aggiunto
    console.log('Nuovo Tip:', newTip);
    console.log('Array tips aggiornato:', existingTips);

    // Pulisci i campi del form dopo l'aggiunta del tip
    setTitle('');
    setSintax('');
    setCode('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Titolo:
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          required
        />
      </label>
      <br />
      <label>
        Sintassi:
        <input
          type="text"
          value={sintax}
          onChange={handleSintaxChange}
          required
        />
      </label>
      <br />
      <label>
        Codice:
        <textarea value={code} onChange={handleCodeChange} required></textarea>
      </label>
      <br />
      <button type="submit">Aggiungi Tip</button>
    </form>
  );
};

export default InsertJSTips;
