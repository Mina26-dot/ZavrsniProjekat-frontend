import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Paper, Typography } from '@mui/material';


const EditGrade = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [ocena, setOcena] = useState('');
    const [prvoPolugodiste, setPrvoPolugodiste] = useState('');
    const [drugoPolugodiste, setDrugoPolugodiste] = useState('');
    const [pismeni, setPismeni] = useState('');
    const [usmeni, setUsmeni] = useState('');
    const [zakljucnaOcena, setZakljucnaOcena] = useState('');
    const [vladanje, setVladanje] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const username = 'admin';
    const password = 'admin14993';
    const encodedCredentials = btoa(`${username}:${password}`);

    useEffect(() => {
        const fetchGrade = async () => {
            try {
                const response = await fetch(`http://localhost:8080/grades/${id}`, {
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
                setOcena(data.ocena || '');
                setPrvoPolugodiste(data.prvoPolugodiste || '');
                setDrugoPolugodiste(data.drugoPolugodiste || '');
                setPismeni(data.pismeni || '');
                setUsmeni(data.usmeni || '');
                setZakljucnaOcena(data.zakljucnaOcena || '');
                setVladanje(data.vladanje || '');
            } catch (error) {
                setError(error);
            }
        };

        fetchGrade();
    }, [id, encodedCredentials]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const queryParams = new URLSearchParams({
                izmenjenaOcena: ocena,
                izmenjenoPrvoPolugodiste: prvoPolugodiste,
                izmenjenoDrugoPolugodiste: drugoPolugodiste,
                izmenjenUsmeni: usmeni,
                izmenjenPismeni: pismeni,
                izmenjenaZakljucnaOcena: zakljucnaOcena,
                izmenjenoVladanje: vladanje
            }).toString();

            const response = await fetch(`http://localhost:8080/grades/update/${id}?${queryParams}`, {
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
            setError(null);
            navigate('/grades');
        } catch (error) {
            setError(error);
        }
    };

    return (
        <Paper elevation={3} style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
            <Typography variant="h5" component="h2" gutterBottom>
                Edit Grade
            </Typography>
            {error && <Typography color="error" style={{ marginBottom: '16px' }}>Error: {error.message}</Typography>}
            {success && <Typography color="success" style={{ marginBottom: '16px' }}>Grade updated successfully!</Typography>}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                <TextField
                    label="Ocena"
                    type="number"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={ocena}
                    onChange={(e) => setOcena(e.target.value)}
                    required
                />
                <TextField
                    label="Prvo Polugodiste"
                    type="number"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={prvoPolugodiste}
                    onChange={(e) => setPrvoPolugodiste(e.target.value)}
                    required
                />
                <TextField
                    label="Drugo Polugodiste"
                    type="number"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={drugoPolugodiste}
                    onChange={(e) => setDrugoPolugodiste(e.target.value)}
                    required
                />
                <TextField
                    label="Pismeni"
                    type="number"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={pismeni}
                    onChange={(e) => setPismeni(e.target.value)}
                    required
                />
                <TextField
                    label="Usmeni"
                    type="number"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={usmeni}
                    onChange={(e) => setUsmeni(e.target.value)}
                    required
                />
                <TextField
                    label="Zakljucna Ocena"
                    type="number"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={zakljucnaOcena}
                    onChange={(e) => setZakljucnaOcena(e.target.value)}
                    required
                />
                <TextField
                    label="Vladanje"
                    type="number"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={vladanje}
                    onChange={(e) => setVladanje(e.target.value)}
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
                    Azuriraj ocenu
                </Button>
            </form>
        </Paper>
    );
};

export default EditGrade;