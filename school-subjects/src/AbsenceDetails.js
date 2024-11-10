
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './global.css';


const AbsenceDetails = ({userRole}) => {
    const { id } = useParams(); 
    const [absence, setAbsence] = useState(null);
    const [error, setError] = useState(null);

    const username = 'admin'; 
    const password = 'admin14993'; 
    const encodedCredentials = btoa(`${username}:${password}`);

    useEffect(() => {
        const fetchAbsence = async () => {
            try {
                const response = await fetch(`http://localhost:8080/absence/get/${id}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Basic ${encodedCredentials}`
                    }
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setAbsence(data.Izostanci1Entity); 
            } catch (error) {
                setError(error);
            }
        };

        fetchAbsence();
    }, [id, encodedCredentials]);

    return (

        <div>
      {error && <p>Error: {error.message}</p>}
      {userRole === 'ADMIN' || userRole === 'NASTAVNIK' ? (
        absence ? (
          <div>
            <h2>ID: {absence.id}</h2>
            <p>Opravdani: {absence.opravdani}</p>
            <p>Neopravdani: {absence.neopravdani}</p>
            <p>Datum izostanka: {absence.datumIzostanka}</p>
            <p>Ime ucenika: {absence.ucenik.imeUcenika}</p>
            <p>Prezime ucenika: {absence.ucenik.prezimeUcenika}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )
      ) : (
        <p>Ne mozete pristupiti ovim podacima!</p>
      )}
    </div>
    );
};

export default AbsenceDetails;