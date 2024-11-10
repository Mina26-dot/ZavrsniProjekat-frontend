import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './global.css';


const GradeDetails = () => {
    const { id } = useParams();
    const [grade, setGrade] = useState(null);
    const [error, setError] = useState(null);

    const username = 'admin'; 
    const password = 'admin14993';
    const encodedCredentials = btoa(`${username}:${password}`);

    useEffect(() => {
        const fetchGrade = async () => {
            try {
                const response = await fetch(`http://localhost:8080/grades/${id}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Basic ${encodedCredentials}`
                    }
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setGrade(data.Ocena1Entity);
            } catch (error) {
                setError(error);
            }
        };

        fetchGrade();
    }, [id, encodedCredentials]);

    return (
        <div>
            {error && <p>Error: {error.message}</p>}
            {grade ? (
                <div>
                    <h2>Ocena: {grade.ocena}</h2>
                    <p>Predmet: {grade.predmet ? grade.predmet.imePredmeta : 'N/A'}</p>
                    <p>Nastavnik: {grade.predmet && grade.predmet.nastavnik ? `${grade.predmet.nastavnik.imeNastavnika} ${grade.predmet.nastavnik.prezimeNastavnika}` : 'N/A'}</p>
                    <p>Ucenik: {grade.ucenik ? `${grade.ucenik.imeUcenika} ${grade.ucenik.prezimeUcenika}` : 'N/A'}</p>
                    <p>Prvo Polugodiste: {grade.prvoPolugodiste}</p>
                    <p>Drugo Polugodiste: {grade.drugoPolugodiste}</p>
                    <p>Zakljucna Ocena: {grade.zakljucnaOcena}</p>
                    <p>Vladanje: {grade.vladanje}</p>
                    <p>Pismeni: {grade.pismeni}</p>
                    <p>Usmeni: {grade.usmeni}</p>
                </div>
            ) : (
                <p>Ucitavanje...</p>
            )}
        </div>
    );
};

export default GradeDetails;