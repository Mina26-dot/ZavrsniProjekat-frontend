import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Paper, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add'; 
import { useNavigate } from 'react-router-dom';

const AddTeacher = () => {
  const [imeNastavnika, setImeNastavnika] = useState('');
  const [prezimeNastavnika, setPrezimeNastavnika] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const username = 'admin';
  const password = 'admin14993';
  const encodedCredentials = btoa(`${username}:${password}`);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        'http://localhost:8080/teacher/create',
        null,
        {
          params: {
            imeNastavnika,
            prezimeNastavnika
          },
          headers: {
            'Authorization': `Basic ${encodedCredentials}`,
            'Content-Type': 'application/json'
          }
        }
      );
      navigate('/teachers'); 
    } catch (error) {
      setError('Neuspešno dodavanje nastavnika. Molimo pokušajte ponovo.');
      console.error('Greška pri dodavanju nastavnika:', error);
    }
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Dodaj nastavnika
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Ime Nastavnika"
          variant="outlined"
          fullWidth
          margin="normal"
          value={imeNastavnika}
          onChange={(e) => setImeNastavnika(e.target.value)}
        />
        <TextField
          label="Prezime Nastavnika"
          variant="outlined"
          fullWidth
          margin="normal"
          value={prezimeNastavnika}
          onChange={(e) => setPrezimeNastavnika(e.target.value)}
        />
        {error && <Typography color="error" style={{ marginTop: '16px' }}>{error}</Typography>}
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

export default AddTeacher;