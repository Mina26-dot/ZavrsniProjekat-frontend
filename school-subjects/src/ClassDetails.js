import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ClassDetails.css';
import axios from 'axios';
import './global.css';


const ClassDetails = () => {
  const { id } = useParams(); 
  const [classData, setClassData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchClass = async () => {
      try {
        const username = 'admin';
        const password = 'admin14993';
        const encodedCredentials = btoa(`${username}:${password}`);

        const response = await axios.get(`http://localhost:8080/class/${id}`, {
          headers: {
            'Authorization': `Basic ${encodedCredentials}`
          }
        });

        console.log('Fetched class:', response.data); 
        setClassData(response.data.Razred1Entity); 

      } catch (error) {
        console.error('Error fetching class:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchClass();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm('Da li ste sigurni da želite da obrišete ovaj razred?')) {
      try {
        const username = 'admin';
        const password = 'admin14993';
        const encodedCredentials = btoa(`${username}:${password}`);

        await axios.delete(`http://localhost:8080/class/${id}`, {
          headers: {
            'Authorization': `Basic ${encodedCredentials}`
          }
        });
        navigate('/class-list');
      } catch (error) {
        console.error('Error deleting class:', error);
        setError(error);
      }
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!classData) {
    return <p>No class found.</p>;
  }

  return (
    <div className="class-details-container">
      <h2>{classData.razredUcenika}</h2>
      <p>Odeljenje: {classData.odeljenje}</p>
      <div className="actions-container">
       
      </div>
    </div>
  );
};

export default ClassDetails;