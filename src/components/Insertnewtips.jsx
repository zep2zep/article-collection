import { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Typography,
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
} from '@mui/material';

const Insertnewtips = () => {
  const [sintax, setSintax] = useState('');
  const [title, setTitle] = useState('');
  const [code, setCode] = useState('');
  const [lastId, setLastId] = useState(0); // Stato per memorizzare l'ultimo ID
  useEffect(() => {
    async function fetchLastId() {
      try {
        const response = await fetch('http://localhost:3003/tips');
        const data = await response.json();
        const sortedData = data.sort(
          (a, b) => parseInt(b.id, 10) - parseInt(a.id, 10),
        );
        // Ordina in base all'ID convertito in numero
        console.error('Sort data:', sortedData);
        const maxId =
          sortedData.length > 0 ? parseInt(sortedData[0].id, 10) : 0; // Converti l'ID in numero
        setLastId(maxId + 1);
      } catch (error) {
        console.error('Error:', error);
      }
    }

    fetchLastId();
  }, []);

  const handleSintaxChange = (e) => {
    setSintax(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const addUserDetails = () => {
    const newTip = {
      id: lastId,
      topic: sintax,
      title: title,
      code: code,
    };

    fetch('http://localhost:3001/tips', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTip),
    })
      .then((response) => {
        if (response.ok) {
          // Se la richiesta è andata a buon fine, esegui qualche azione come il reset dei campi del form
          setSintax('');
          setTitle('');
          setCode('');
          alert('Nuovo tip aggiunto con successo!');
        } else {
          throw new Error("Errore durante l'aggiunta del nuovo tip");
        }
      })
      .catch((error) => {
        console.error('Si è verificato un errore:', error);
        alert("Si è verificato un errore durante l'aggiunta del nuovo tip");
      });
  };

  return (
    <Container maxWidth="sm" className="cont-form">
      <Box my={5}>
        <Typography variant="h5" align="center" className=" mb-3">
          Insert new Tip
        </Typography>
        <FormGroup>
          <FormControl>
            <InputLabel
              className=" mb-3"
              htmlFor="sintax"
              style={{ color: 'var(--clr-text)' }}
            >
              Sintax:
            </InputLabel>
            <Input
              className="mt-3 mb-3"
              onChange={handleSintaxChange}
              name="sintax"
              value={sintax}
              style={{ color: 'var(--clr-text)', background: 'var(--clr-bg)' }}
            />
          </FormControl>
          <FormControl>
            <InputLabel
              className=" mb-3"
              htmlFor="title"
              style={{ color: 'var(--clr-text)' }}
            >
              Title:
            </InputLabel>
            <Input
              className="mt-3 mb-3"
              onChange={handleTitleChange}
              name="title"
              value={title}
              style={{ color: 'var(--clr-text)', background: 'var(--clr-bg)' }}
            />
          </FormControl>
          <FormControl>
            <InputLabel
              className=" mb-3"
              htmlFor="code"
              style={{ color: 'var(--clr-text)' }}
            >
              Code:
            </InputLabel>
            <Input
              className="mt-3 mb-3"
              onChange={handleCodeChange}
              name="code"
              value={code}
              style={{ color: 'var(--clr-text)', background: 'var(--clr-bg)' }}
            />
          </FormControl>
          <Box my={3}>
            <Button
              variant="contained"
              onClick={addUserDetails}
              color="primary"
              align="center"
            >
              Add User
            </Button>
          </Box>
        </FormGroup>
      </Box>
    </Container>
  );
};

export default Insertnewtips;
