import React, { useEffect, useState } from 'react';

const ParentDetails = ({ id }) => {
    const [parent, setParent] = useState(null);
    const [error, setError] = useState(null);

    const username = 'admin';
    const password = 'admin14993';
    const encodedCredentials = btoa(`${username}:${password}`);

    useEffect(() => {
        const fetchParent = async () => {
            try {
                const response = await fetch(`http://localhost:8080/parent/get/${id}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Basic ${encodedCredentials}`
                    }
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setParent(data);
            } catch (error) {
                setError(error);
            }
        };

        fetchParent();
    }, [id, encodedCredentials]);

    return (
        <div>
            {error && <p>Error: {error.message}</p>}
            {parent ? (
                <div>
                    <h2>Ime: {parent.ime}</h2>
                    <p>Prezime: {parent.prezime}</p>
                    <p>Email: {parent.email}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ParentDetails;