import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditParent = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const [name, setName] = useState('');
    const [studentId, setStudentId] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const username = 'admin';
    const password = 'admin14993';
    const encodedCredentials = btoa(`${username}:${password}`);

    useEffect(() => {
        const fetchParent = async () => {
            try {
                const response = await fetch(`http://localhost:8080/parent/${id}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Basic ${encodedCredentials}`,
                    }
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setName(data.name);
                setStudentId(data.studentId);
            } catch (error) {
                setError(error);
            }
        };

        fetchParent();
    }, [id, encodedCredentials]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:8080/parent/update/${id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Basic ${encodedCredentials}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, studentId })
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            setSuccess(true);
            navigate('/parents');
        } catch (error) {
            setError(error);
        }
    };

    return (
        <div>
            <h2>Azuriraj roditelja</h2>
            {error && <p>Error: {error.message}</p>}
            {success && <p>Parent updated successfully!</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Ime:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Ucenik ID:
                    <input
                        type="text"
                        value={studentId}
                        onChange={(e) => setStudentId(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Azuriraj roditelja</button>
            </form>
        </div>
    );
};

export default EditParent;