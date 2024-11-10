import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddAbsence.css'; 

const AddAbsence = () => {
    const [studentId, setStudentId] = useState('');
    const [date, setDate] = useState('');
    const [justified, setJustified] = useState('');
    const [unjustified, setUnjustified] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();
    const username = 'admin';
    const password = 'admin14993';
    const encodedCredentials = btoa(`${username}:${password}`);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:8080/absence/create?opravdani=${encodeURIComponent(justified)}&neopravdani=${encodeURIComponent(unjustified)}&datumIzostanka=${encodeURIComponent(date)}&ucenik=${encodeURIComponent(studentId)}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Basic ${encodedCredentials}`,
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Network response was not ok: ${errorText}`);
            }

            setSuccess(true);
            setStudentId('');
            setDate('');
            setJustified('');
            setUnjustified('');
            setTimeout(() => {
                navigate('/absences');
            }, 1000);
        } catch (error) {
            setError(error);
        }
    };

    return (
        <div className="form-container">
            <h2>Dodaj izostanak</h2>
            {error && <p className="error-message">Error: {error.message}</p>}
            {success && <p className="success-message">Absence added successfully!</p>}
            <form onSubmit={handleSubmit} className="absence-form">
                <label>
                    Ucenik:
                    <input
                        type="text"
                        value={studentId}
                        onChange={(e) => setStudentId(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Datum:
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Opravdani:
                    <input
                        type="text"
                        value={justified}
                        onChange={(e) => setJustified(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Neopravdani:
                    <input
                        type="text"
                        value={unjustified}
                        onChange={(e) => setUnjustified(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Dodaj</button>
            </form>
        </div>
    );
};

export default AddAbsence;
