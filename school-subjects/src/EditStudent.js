import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, MenuItem, Button, Paper, Typography } from '@mui/material';

const EditStudent = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [parentId, setParentId] = useState('');
    const [classId, setClassId] = useState('');
    const [parents, setParents] = useState([]);
    const [classes, setClasses] = useState([]);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const username = 'admin';
    const password = 'admin14993';
    const encodedCredentials = btoa(`${username}:${password}`);

    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const response = await fetch(`http://localhost:8080/student/${id}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Basic ${encodedCredentials}`,
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch student data');
                }
                const data = await response.json();
                setName(data.ime || '');
                setLastName(data.prezime || '');
                setParentId(data.roditelj ? data.roditelj.id : '');
                setClassId(data.razred ? data.razred.id : '');
            } catch (error) {
                setError(error);
            }
        };

        const fetchParents = async () => {
            try {
                const response = await fetch('http://localhost:8080/parent/all', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Basic ${encodedCredentials}`,
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch parents');
                }
                const data = await response.json();
                setParents(data.ArrayList || []);
            } catch (error) {
                setError(error);
            }
        };

        const fetchClasses = async () => {
            try {
                const response = await fetch('http://localhost:8080/class/all', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Basic ${encodedCredentials}`,
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch classes');
                }
                const data = await response.json();
                setClasses(data.ArrayList || []);
            } catch (error) {
                setError(error);
            }
        };

        fetchStudent();
        fetchParents();
        fetchClasses();
    }, [id, encodedCredentials]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const queryParams = new URLSearchParams({
                izmenjenoIme: name,
                izmenjenoPrezime: lastName,
                izmenjenRoditelj: parentId,
                izmenjeniRazred: classId
            }).toString();

            const response = await fetch(`http://localhost:8080/student/update/${id}?${queryParams}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Basic ${encodedCredentials}`,
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Failed to update student: ${errorData.message || 'Unknown error'}`);
            }

            setSuccess(true);
            navigate('/students');
        } catch (error) {
            setError(error);
        }
    };

    return (
        <Paper elevation={3} style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
            <Typography variant="h5" component="h2" gutterBottom>
                Azuriraj ucenika
            </Typography>
            {error && <Typography color="error" style={{ marginBottom: '16px' }}>Error: {error.message}</Typography>}
            {success && <Typography color="success" style={{ marginBottom: '16px' }}>Student updated successfully!</Typography>}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                <TextField
                    label="Ime"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <TextField
                    label="Prezime"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
                <TextField
                    select
                    label="Roditelj"
                    value={parentId}
                    onChange={(e) => setParentId(e.target.value)}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                >
                    <MenuItem value="">Odaberite roditelja</MenuItem>
                    {parents.map(parent => (
                        <MenuItem key={parent.id} value={parent.id}>
                            {parent.imeRoditelja} {parent.prezimeRoditelja}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    select
                    label="Razred"
                    value={classId}
                    onChange={(e) => setClassId(e.target.value)}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                >
                    <MenuItem value="">Odaberi razred</MenuItem>
                    {classes.map(cls => (
                        <MenuItem key={cls.id} value={cls.id}>
                            {cls.razredUcenika} - {cls.odeljenje}
                        </MenuItem>
                    ))}
                </TextField>
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

export default EditStudent;