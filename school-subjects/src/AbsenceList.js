import React, { useEffect, useState, useCallback } from 'react';
import './AbsenceList.css';


const AbsenceList = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const username = 'admin';
    const password = 'admin14993';
    const encodedCredentials = btoa(`${username}:${password}`);

    const fetchData = useCallback(async () => {
        try {
            const response = await fetch('http://localhost:8080/absence/all', {
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
                            <th>Ucenik ID</th>
                            <th>Datum</th>
                            <th>Razlog</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((absence) => (
                            <tr key={absence.id}>
                                <td>{absence.id}</td>
                                <td>{absence.studentId}</td>
                                <td>{absence.date}</td>
                                <td>{absence.reason}</td>
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

export default AbsenceList;