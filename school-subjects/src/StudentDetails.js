import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './global.css';


const StudentDetails = ({ userRole }) => {



    const { id } = useParams();
    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const username = 'admin';
    const password = 'admin14993';
    const encodedCredentials = btoa(`${username}:${password}`);

    useEffect(() => {
        const fetchStudent = async () => {
            try {
                if (!id) {
                    throw new Error('ID is not defined');
                }

                const response = await fetch(`http://localhost:8080/student/${id}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Basic ${encodedCredentials}`
                    }
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setStudent(data.Ucenik1Entity || data);
            } catch (error) {
                console.error('Error fetching student:', error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchStudent();
    }, [id, encodedCredentials]);


    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    if (!student) {
        return <p>No student found.</p>;
    }

    return (

        <div>
      {(userRole === 'ADMIN' || userRole === 'NASTAVNIK') ? (
        <div>
          <h2>{student.imeUcenika} {student.prezimeUcenika}</h2>
          <p>Razred: {student.razred ? `${student.razred.razredUcenika} ${student.razred.odeljenje}` : 'N/A'}</p>
          <p>Roditelj: {student.roditelj ? `${student.roditelj.imeRoditelja} ${student.roditelj.prezimeRoditelja}` : 'N/A'}</p>
          <p>Email roditelja: {student.roditelj ? student.roditelj.emailRoditelja : 'N/A'}</p>
        </div>
      ) : (
        <div className="no-access-message">
          Nemate pristup ovim podacima!
        </div>
      )}
      
    </div>
    
    );
};

export default StudentDetails;

