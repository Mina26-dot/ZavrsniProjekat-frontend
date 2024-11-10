import React, { useState } from 'react';

const AddParent = () => {
    const [name, setName] = useState('');
    const [studentId, setStudentId] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const username = 'admin';
    const password = 'admin14993';
    const encodedCredentials = btoa(`${username}:${password}`);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/parent/create', {
                method: 'POST',
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
            setName('');
            setStudentId('');
        } catch (error) {
            setError(error);
        }
    };

    return (
        <div>
            <h2>Add Parent</h2>
            {error && <p>Error: {error.message}</p>}
            {success && <p>Parent added successfully!</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Student ID:
                    <input
                        type="text"
                        value={studentId}
                        onChange={(e) => setStudentId(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Add Parent</button>
            </form>
        </div>
    );
};

export default AddParent;