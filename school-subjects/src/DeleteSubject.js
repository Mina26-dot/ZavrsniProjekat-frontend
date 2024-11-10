import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const DeleteSubject = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [subject, setSubject] = useState(null);
    const [error, setError] = useState(null);

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
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setSubject(data);
            } catch (error) {
                setError(error);
            }
        };

        fetchSubject();
    }, [id, encodedCredentials]);

    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:8080/subject/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Basic ${encodedCredentials}`,
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            navigate('/subjects');
        } catch (error) {
            setError(error);
        }
    };

    const handleCancel = () => {
        navigate('/subjects');
    };

    return (
        <div>
            <h2>Obrisi predmet</h2>
            {error && <p>Error: {error.message}</p>}
            {subject ? (
                <div>
                    <p>Da li ste sigurni da zelite da izbrisete ovaj predmet<strong>{subject.imePredmeta}</strong>?</p>
                    <button onClick={handleDelete} style={{ color: 'red' }}>
                        Da
                    </button>
                    <button onClick={handleCancel}>
                        Ne
                    </button>
                </div>
            ) : (
                <p>Ucitavanje...</p>
            )}
        </div>
    );
};

export default DeleteSubject;