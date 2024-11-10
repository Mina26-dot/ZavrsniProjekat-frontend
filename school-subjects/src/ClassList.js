import React, { useEffect, useState, useCallback } from 'react';

const ClassList = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const username = 'admin';
    const password = 'admin14993';
    const encodedCredentials = btoa(`${username}:${password}`);

    const fetchData = useCallback(async () => {
        try {
            const response = await fetch('http://localhost:8080/class/all', {
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
    }, [encodedCredentials]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <div>
            {error && <p>Error: {error.message}</p>}
            {data.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Razred</th>
                            <th>Nastavnik ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((classItem) => (
                            <tr key={classItem.id}>
                                <td>{classItem.id}</td>
                                <td>{classItem.className}</td>
                                <td>{classItem.teacherId}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Ucitavanje...</p>
            )}
        </div>
    );
};

export default ClassList;