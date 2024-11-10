import React, { useState, useEffect } from 'react';
import { TextField, Button, Paper, Typography, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './AddStudent.css'; 

const AddStudent = () => {
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

    const navigate = useNavigate();

    useEffect(() => {
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

        fetchParents();
        fetchClasses();
    }, [encodedCredentials]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/student/add', {
                method: 'POST',
                headers: {
                    'Authorization': `Basic ${encodedCredentials}`,
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams({
                    ime: name,
                    prezime: lastName,
                    roditelj: parentId,
                    razred: classId
                }).toString()
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            setSuccess(true);
            setName('');
            setLastName('');
            setParentId('');
            setClassId('');
            setTimeout(() => {
                navigate('/students');
            }, 1000);
        } catch (error) {
            setError(error);
        }
    };

    return (
        <Paper elevation={3} className="form-container">
            <Typography variant="h5" component="h2" className="form-title">
                Dodaj ucenika
            </Typography>
            {error && <Typography color="error" className="form-error">Error: {error.message}</Typography>}
            {success && <Typography color="success" className="form-success">Student added successfully!</Typography>}
            <form onSubmit={handleSubmit} className="student-form">
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
                <FormControl fullWidth margin="normal">
                    <InputLabel>Roditelj</InputLabel>
                    <Select
                        value={parentId}
                        onChange={(e) => setParentId(e.target.value)}
                        required
                    >
                        <MenuItem value="">Izaberi roditelja</MenuItem>
                        {parents.map(parent => (
                            <MenuItem key={parent.id} value={parent.id}>
                                {parent.imeRoditelja} {parent.prezimeRoditelja}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl fullWidth margin="normal">
                    <InputLabel>Razred</InputLabel>
                    <Select
                        value={classId}
                        onChange={(e) => setClassId(e.target.value)}
                        required
                    >
                        <MenuItem value="">Izaberi razred</MenuItem>
                        {classes.map(cls => (
                            <MenuItem key={cls.id} value={cls.id}>
                                {cls.razredUcenika} - {cls.odeljenje}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Button 
                    type="submit" 
                    variant="contained" 
                    sx={{ 
                        backgroundColor: '#800080', 
                        color: '#fff', 
                        '&:hover': { 
                            backgroundColor: '#800080'
                        },
                        mt: 2 
                    }} 
                >
                    Dodaj
                </Button>
            </form>
        </Paper>
    );
};

export default AddStudent;
