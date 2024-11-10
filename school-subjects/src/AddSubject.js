import React, { useState } from 'react';
import { TextField, Button, Paper, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add'; 
import { useNavigate } from 'react-router-dom';

const AddSubject = () => {
  const [imePredmeta, setImePredmeta] = useState('');
  const [nedeljniFondCasova, setNedeljniFondCasova] = useState('');
  const [nastavnikId, setNastavnikId] = useState('');
  const [razred, setRazred] = useState('');
  const navigate = useNavigate();

  const username = 'admin';
  const password = 'admin14993';
  const encodedCredentials = btoa(`${username}:${password}`);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = new URL('http://localhost:8080/subject/add');
    url.searchParams.append('imePredmeta', imePredmeta);
    url.searchParams.append('nedeljniFondCasova', nedeljniFondCasova);
    url.searchParams.append('nastavnikId', nastavnikId);
    url.searchParams.append('razred', razred);

    try {
      const response = await fetch(url.toString(), {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${encodedCredentials}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      if (!response.ok) {
        throw new Error('Neuspesno dodavanje predmeta. Molimo pokusajte ponovo.');
      }

      navigate('/subjects'); 
    } catch (error) {
      console.error('Greska pri dodavanju predmeta:', error);
    }
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Dodaj predmet
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Ime Predmeta"
          variant="outlined"
          fullWidth
          margin="normal"
          value={imePredmeta}
          onChange={(e) => setImePredmeta(e.target.value)}
        />
        <TextField
          label="Nedeljni Fond Casova"
          variant="outlined"
          fullWidth
          margin="normal"
          type="number"
          value={nedeljniFondCasova}
          onChange={(e) => setNedeljniFondCasova(e.target.value)}
        />
        <TextField
          label="Nastavnik ID"
          variant="outlined"
          fullWidth
          margin="normal"
          type="number"
          value={nastavnikId}
          onChange={(e) => setNastavnikId(e.target.value)}
        />
        <TextField
          label="Razred"
          variant="outlined"
          fullWidth
          margin="normal"
          type="number"
          value={razred}
          onChange={(e) => setRazred(e.target.value)}
        />
        <Button 
          type="submit" 
          variant="contained" 
          sx={{ backgroundColor: '#800080', mt: 2, color: 'white' }} 
          startIcon={<AddIcon />}  
        >
          Dodaj
        </Button>
      </form>
    </Paper>
  );
};

export default AddSubject;






