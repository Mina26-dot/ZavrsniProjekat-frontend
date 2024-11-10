import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Paper, Typography } from '@mui/material';

const EditSubject = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [subjectName, setSubjectName] = useState('');
    const [weeklyClassFund, setWeeklyClassFund] = useState('');
    const [teacher, setTeacher] = useState('');
    const [classInfo, setClassInfo] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const username = 'admin';
    const password = 'admin14993';
    const encodedCredentials = btoa(`${username}:${password}`);

    useEffect(() => {
        const fetchSubject = async () => {
            try {
                const response = await fetch(`http://localhost:8080/subject/get/${id}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Basic ${encodedCredentials}`,
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) throw new Error('Error fetching subject');
                const data = await response.json();
                setSubjectName(data.imePredmeta || '');
                setWeeklyClassFund(data.nedeljniFondCasova || '');
                setTeacher(data.nastavnik ? data.nastavnik.ime : '');
                setClassInfo(data.razred ? data.razred.naziv : ''); 
            } catch (error) {
                setError(error.message);
            }
        };

        fetchSubject();
    }, [id, encodedCredentials]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:8080/subject/update/${id}?novoImePredmeta=${encodeURIComponent(subjectName)}&noviNedeljniFondCasova=${encodeURIComponent(weeklyClassFund)}&noviNastavnik=${encodeURIComponent(teacher)}&noviRazred=${encodeURIComponent(classInfo)}`, {
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
            navigate('/subjects');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <Paper elevation={3} style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
            <Typography variant="h5" component="h2" gutterBottom>
                Azuriraj predmet
            </Typography>
            {error && <Typography color="error" style={{ marginBottom: '16px' }}>Error: {error}</Typography>}
            {success && <Typography color="success" style={{ marginBottom: '16px' }}>Subject updated successfully!</Typography>}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                <TextField
                    label="Ime predmeta"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={subjectName}
                    onChange={(e) => setSubjectName(e.target.value)}
                    required
                />
                <TextField
                    label="Nedeljni fond casova"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    type="number"
                    value={weeklyClassFund}
                    onChange={(e) => setWeeklyClassFund(e.target.value)}
                    required
                />
                <TextField
                    label="Nastavnik"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={teacher}
                    onChange={(e) => setTeacher(e.target.value)}
                    required
                />
                <TextField
                    label="Razred"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={classInfo}
                    onChange={(e) => setClassInfo(e.target.value)}
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

export default EditSubject;



