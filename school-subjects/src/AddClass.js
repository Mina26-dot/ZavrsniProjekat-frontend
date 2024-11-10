import React, { useState } from 'react';
import { TextField, Button, Paper, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import './AddClass.css';


const AddClass = () => {
    const [className, setClassName] = useState('');
    const [section, setSection] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const username = 'admin';
    const password = 'admin14993';
    const encodedCredentials = btoa(`${username}:${password}`);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:8080/class/create?noviRazred=${encodeURIComponent(className)}&novoOdeljenje=${encodeURIComponent(section)}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Basic ${encodedCredentials}`,
                    'Content-Type': 'application/json' 
                }
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Network response was not ok: ${errorData.message || response.statusText}`);
            }

            setSuccess(true);
            setClassName('');
            setSection('');
            setTimeout(() => {
                navigate('/classes'); 
            }, 1000);
        } catch (error) {
            setError(`Error adding class: ${error.message}`);
            console.error('Error adding class:', error);
        }
    };

    return (
        <Paper elevation={3} style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
            <Typography variant="h5" component="h2" gutterBottom>
                Dodaj razred
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Razred"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={className}
                    onChange={(e) => setClassName(e.target.value)}
                    required
                />
                <TextField
                    label="Odeljenje"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={section}
                    onChange={(e) => setSection(e.target.value)}
                    required
                />
                {error && <Typography color="error" style={{ marginTop: '16px' }}>{error}</Typography>}
                {success && <Typography color="success" style={{ marginTop: '16px' }}>Class added successfully!</Typography>}
                <Button 
                    type="submit" 
                    variant="contained" 
                    sx={{ backgroundColor: '#800080', color: 'white', mt: 2 }} 
                    startIcon={<AddIcon />}  
                >
                    Dodaj
                </Button>
            </form>
        </Paper>
    );
};

export default AddClass;