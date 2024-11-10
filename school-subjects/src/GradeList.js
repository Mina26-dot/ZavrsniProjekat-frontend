import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './GradeList.css'; 

const GradeList = () => {
    const [grades, setGrades] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGrades = async () => {
            try {
                const response = await fetch('http://localhost:8080/grades/all', {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Basic ' + btoa('admin:admin14993')
                    }
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setGrades(data);
            } catch (error) {
                setError(error);
            }
        };

        fetchGrades();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this grade?')) {
            try {
                const response = await fetch(`http://localhost:8080/grade/delete/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': 'Basic ' + btoa('admin:admin14993')
                    }
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                setGrades(grades.filter(grade => grade.id !== id));
            } catch (error) {
                setError(error);
            }
        }
    };

    return (
        <div className="grades-container">
            {error && <p>Error: {error.message}</p>}
            <div className="grades-list">
                {grades.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Ocena</th>
                                <th>Prvo Polugodiste</th>
                                <th>Drugo Polugodiste</th>
                                <th>Zakljucna Ocena</th>
                                <th>Vladanje</th>
                                <th>Pismeni</th>
                                <th>Usmeni</th>
                                <th>Predmet</th>
                                <th>Nastavnik</th>
                                <th>Ucenik</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {grades.map(grade => (
                                <tr key={grade.id}>
                                    <td>{grade.id}</td>
                                    <td>{grade.ocena}</td>
                                    <td>{grade.prvoPolugodiste}</td>
                                    <td>{grade.drugoPolugodiste}</td>
                                    <td>{grade.zakljucnaOcena}</td>
                                    <td>{grade.vladanje}</td>
                                    <td>{grade.pismeni}</td>
                                    <td>{grade.usmeni}</td>
                                    <td>{grade.predmet ? grade.predmet.naziv : 'N/A'}</td>
                                    <td>{grade.nastavnik ? grade.nastavnik.ime : 'N/A'}</td>
                                    <td>{grade.ucenik ? grade.ucenik.ime : 'N/A'}</td>
                                    <td>
                                        <Link to={`/grades/edit/${grade.id}`} className="edit-button">Edit</Link>
                                        <button onClick={() => handleDelete(grade.id)} className="delete-button">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No grades found</p>
                )}
            </div>
            <Link to="/grades/add" className="add-button">
                <button>Add Grade</button>
            </Link>
        </div>
    );
};

export default GradeList;