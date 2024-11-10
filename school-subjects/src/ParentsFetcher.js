import React, { useEffect, useState, useCallback } from 'react';

const ParentsFetcher = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [username, setUsername] = useState('roditelj'); 

    const getCredentials = () => {
        return {
            username: 'roditelj', 
            password: 'password2'
        };
    };

    const fetchData = useCallback(async () => {
        const { username, password } = getCredentials();
        const encodedCredentials = btoa(`${username}:${password}`);

        if (!username) {
            console.error('Username is not set.');
            return;
        }

        try {
            const response = await fetch(`http://localhost:8080/parent/children/${username}`, {
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
            setData(data);
        } catch (error) {
            setError(error);
        }
    }, [username]);

    useEffect(() => {
        if (username) {
            fetchData(); 
        }
    }, [fetchData, username]);

    return (
        <div>
            {error && <p>Error: {error.message}</p>}
            {data ? (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            ) : (
                <p>Ucitavanje...</p>
            )}
        </div>
    );
};

export default ParentsFetcher;