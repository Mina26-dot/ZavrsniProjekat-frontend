
import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (newPassword !== confirmPassword) {
      setError('Nova lozinka i potvrda lozinke se ne poklapaju.');
      return;
    }

    setSuccess('Lozinka je uspesno promenjena!');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  const buttonStyle = {
    backgroundColor: '#800080',
    color: 'white',
    '&:hover': {
      backgroundColor: '#800080', 
    },
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h2" gutterBottom align="center">
        Promeni Lozinku
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" gap={2}>
          <TextField
            label="Trenutna lozinka"
            type="password"
            fullWidth
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
          <TextField
            label="Nova lozinka"
            type="password"
            fullWidth
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <TextField
            label="Potvrdi novu lozinku"
            type="password"
            fullWidth
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {error && (
            <Typography color="error" align="center">
              {error}
            </Typography>
          )}
          {success && (
            <Typography color="primary" align="center">
              {success}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={buttonStyle } 
          >
            Promeni lozinku
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default ChangePassword;