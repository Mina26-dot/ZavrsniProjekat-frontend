import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './TeacherDetails.css';
import './global.css'; 

import axios from 'axios';

const TeacherDetails = ({userRole}) => {
  const { id } = useParams();
  const [teacher, setTeacher] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeacher = async () => {
      try {
        const username = 'admin';
        const password = 'admin14993';
        const encodedCredentials = btoa(`${username}:${password}`);

        const response = await axios.get(`http://localhost:8080/teacher/get/${id}`, {
          headers: {
            'Authorization': `Basic ${encodedCredentials}`
          }
        });

        setTeacher(response.data.Nastavnik1Entity);
      } catch (error) {
        console.error('Error fetching teacher:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeacher();
  }, [id]);

  
  
  
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!teacher) {
    return <p>No teacher found.</p>;
  }

  return (

    <div>
    {userRole === 'ADMIN' || userRole === 'NASTAVNIK' ? (
      <div className="actions-container">
        <h2>{teacher.imeNastavnika} {teacher.prezimeNastavnika}</h2>
      </div>
    ) : (
      <div className="no-access-message">
        Ne mozete pristupiti ovim podacima!
      </div>
    )}
  </div>
   
  );
};

export default TeacherDetails;
