import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Paper, Typography } from '@mui/material';

const EditClass = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [className, setClassName] = useState('');
    const [classSection, setClassSection] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const username = 'admin';
    const password = 'admin14993';
    const encodedCredentials = btoa(`${username}:${password}`);

    useEffect(() => {
        const fetchClass = async () => {
            try {
                const response = await fetch(`http://localhost:8080/class/get/${id}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Basic ${encodedCredentials}`,
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setClassName(data.razredUcenika || '');
                setClassSection(data.odeljenje || '');
            } catch (error) {
                setError(error);
            }
        };

        fetchClass();
    }, [id, encodedCredentials]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const query = new URLSearchParams({
                izmenjenRazredUcenika: className,
                izmenjenoOdeljenje: classSection
            }).toString();

            const response = await fetch(`http://localhost:8080/class/${id}?${query}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Basic ${encodedCredentials}`,
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Network response was not ok: ${errorData.message || 'Unknown error'}`);
            }

            setSuccess(true);
            navigate('/classes');
        } catch (error) {
            setError(error);
        }
    };

    return (
        <Paper elevation={3} style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
            <Typography variant="h5" component="h2" gutterBottom>
                Azuriraj Razred
            </Typography>
            {success && <Typography color="success" style={{ marginBottom: '16px' }}>Class updated successfully!</Typography>}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
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
                    value={classSection}
                    onChange={(e) => setClassSection(e.target.value)}
                    required
                />
                <Button 
                    type="submit" 
                    variant="contained" 
                    sx={{ 
                        backgroundColor: '#800080', 
                        color: '#fff', 
                        '&:hover': { 
                            backgroundColor: '#800080' 
                        },
                        marginTop: '16px'
                    }} 
                >
                    Azuriraj
                </Button>
            </form>
        </Paper>
    );
};

export default EditClass;