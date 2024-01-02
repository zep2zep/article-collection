import { useEffect, useState } from 'react';
import Card from '../components/Card';

function Alltips() {
  const [tips, setTips] = useState(null);

  useEffect(() => {
    // Effettua una richiesta GET per ottenere i dati degli employee dal JSON Server
    fetch('http://localhost:3001/tips')
      .then((response) => response.json())
      .then((data) => {
        setTips(data);
      })
      .catch((error) => {
        console.error('Si è verificato un errore:', error);
      });
  }, []);

  return (
    <div className="container">
      <h2
        style={{ maxWidth: '300px', textAlign: 'center' }}
        className="bg-body-secondary text-primary border-info border rounded-2 border-2 mb-3"
      >
        Dati tips
      </h2>

      {tips !== null && tips.map((el) => <Card key={el.id} {...el} />)}
    </div>
  );
}

export default Alltips;
