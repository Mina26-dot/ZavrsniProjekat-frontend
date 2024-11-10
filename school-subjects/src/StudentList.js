
import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
// import StudentFetcher from './StudentFetcher';
import './StudentList.css';

const StudentList = () => {


    const [setStudents] = useState([]);
    const [error, setError] = useState(null);

    const username = 'admin';
    const password = 'admin14993';
    
    const encodedCredentials = btoa(`${username}:${password}`);

    const fetchData = useCallback(async () => {
        try {
            const response = await fetch('http://localhost:8080/student/all', {
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
            console.log('Fetched data:', data);
            if (Array.isArray(data) && data.length > 0) {
                setStudents(data);
            } else {
                setStudents([]);
            }
        } catch (error) {
            setError(error);
        }
    }, [encodedCredentials]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:8080/student/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Basic ${encodedCredentials}`,
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                setStudents(students.filter(student => student.id !== id));
            } else {
                throw new Error('Failed to delete student');
            }
        } catch (error) {
            setError(error);
        }
    };

    return (
        <div className="student-list-container">
            {error && <p className="error-message">Error: {error.message}</p>}
           
            {students.length > 0 ? (
                <table className="student-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Ime</th>
                            <th>Prezime</th>
                            <th>Razred</th>
                            <th>Roditelj</th>
                            <th>*</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.imeUcenika}</td>
                                <td>{student.prezimeUcenika}</td>
                                <td>{student.razred}</td>
                                <td>{student.roditelj}</td>
                                <td>
                                    <Link to={`/students/edit/${student.id}`} style={{ textDecoration: 'none', marginRight: '8px' }}>
                                        <button className="edit-button">Edit</button>
                                    </Link>
                                    <button 
                                        className="delete-button"
                                        onClick={() => handleDelete(student.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="no-students">Ucitavanje...</p>
            )}
            <Link to="/students/add" style={{ textDecoration: 'none' }}>
                <button className="add-button">Dodaj ucenika</button>
            </Link>
        </div>
    );
};

export default StudentList;
