// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import IconButton from '@mui/material/IconButton';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import './SubjectDetails.css';
// import axios from 'axios';
// import './global.css'; 


// const SubjectDetails = () => {
//   const { id } = useParams();
//   const [subject, setSubject] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   let [isHidden, setIsHidden] = useState(true)

//   const username = 'admin';
//   const password = 'admin14993';

//   const encodedCredentials = btoa(`${username}:${password}`);


//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchSubject = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8080/subject/get/${id}`, {
//           headers: {
//             'Authorization': `Basic ${encodedCredentials}`
//           }
//         });

//         setSubject(response.data.Predmet1Entity);

//       } catch (error) {
//         console.error('Error fetching subject:', error);
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSubject();
//   }, [id]);

//   const handleDelete = async () => {
//     if (window.confirm('Da li ste sigurni da zelite da obrisete ovaj predmet?')) {
//       try {
//         const username = 'admin';
//         const password = 'admin14993';
        
//         const encodedCredentials = btoa(`${username}:${password}`);

//         await axios.delete(`http://localhost:8080/subject/delete/${id}`, {
//           headers: {
//             'Authorization': `Basic ${encodedCredentials}`
//           }
//         });
//         navigate('/subjects'); 
//       } catch (error) {
//         console.error('Error deleting subject:', error);
//         setError(error);
//       }
//     }
//   };


//   if(username === 'admin') {
//     isHidden = false
//  } else {
//     isHidden = true
//  }


//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   if (!subject) {
//     return <p>No subject found.</p>;
//   }

//   return (
//     <div>
//       <h2>{subject.imePredmeta}</h2>
//       <p>Nedeljni Fond Casova: {subject.nedeljniFondCasova}</p>
//       <p>Nastavnik: {subject.nastavnik ? `${subject.nastavnik.imeNastavnika} ${subject.nastavnik.prezimeNastavnika}` : 'N/A'}</p>
//       <p>Razred: {subject.razred ? `${subject.razred.razredUcenika}` : 'N/A'}</p>
  
//       <div className="actions-container">
        
//         { !isHidden && (
//         <IconButton 
//           onClick={() => navigate(`/subjects/edit/${id}`)} 
//           aria-label="edit"
//           sx={{ 
//             fontSize: 30, 
//             color: 'black', 
//             backgroundColor: '#FF69B4', 
//             '&:hover': { 
//               backgroundColor: '#FF00FF' 
//             },
//             borderRadius: '4px', 
//             boxShadow: '0 2px 4px rgba(0,0,0,0.2)' 
//           }}
//         >   
//           <EditIcon />
//         </IconButton>
//         )}
        
//          { !isHidden && (
//         <IconButton 
//           onClick={() => navigate(`/subjects/delete/${id}`)} 
//           aria-label="delete"
//           sx={{ 
//             fontSize: 30, 
//             color: 'black', 
//             backgroundColor: '#9e107b',
//             '&:hover': { 
//               backgroundColor: '#800080' 
//             },
//             borderRadius: '4px',
//             boxShadow: '0 2px 4px rgba(0,0,0,0.2)' 
//           }}
//         >   
//           <DeleteIcon />
//         </IconButton>
//         )}
//       </div>
      
//     </div>
//   );
// };

// export default SubjectDetails;


















import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './SubjectDetails.css';
import axios from 'axios';
import './global.css'; 


const SubjectDetails = ({ userRole }) => {
  const { id } = useParams();
  const [subject, setSubject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //let [isHidden, setIsHidden] = useState(true)

  const username = 'admin';
  const password = 'admin14993';

  const encodedCredentials = btoa(`${username}:${password}`);


  const navigate = useNavigate();

  useEffect(() => {
    const fetchSubject = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/subject/get/${id}`, {
          headers: {
            'Authorization': `Basic ${encodedCredentials}`
          }
        });

        setSubject(response.data.Predmet1Entity);

      } catch (error) {
        console.error('Error fetching subject:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubject();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm('Da li ste sigurni da zelite da obrisete ovaj predmet?')) {
      try {
        const username = 'admin';
        const password = 'admin14993';
        
        const encodedCredentials = btoa(`${username}:${password}`);

        await axios.delete(`http://localhost:8080/subject/delete/${id}`, {
          headers: {
            'Authorization': `Basic ${encodedCredentials}`
          }
        });
        navigate('/subjects'); 
      } catch (error) {
        console.error('Error deleting subject:', error);
        setError(error);
      }
    }
  };


//   if(username === 'admin') {
//     isHidden = false
//  } else {
//     isHidden = true
//  }


  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!subject) {
    return <p>No subject found.</p>;
  }

  return (
    <div>
      <h2>{subject.imePredmeta}</h2>
      <p>Nedeljni Fond Casova: {subject.nedeljniFondCasova}</p>
      <p>Nastavnik: {subject.nastavnik ? `${subject.nastavnik.imeNastavnika} ${subject.nastavnik.prezimeNastavnika}` : 'N/A'}</p>
      <p>Razred: {subject.razred ? `${subject.razred.razredUcenika}` : 'N/A'}</p>
  
      <div className="actions-container">
        
      {(userRole === 'ADMIN' || userRole === 'NASTAVNIK') && (
        <IconButton 
          onClick={() => navigate(`/subjects/edit/${id}`)} 
          aria-label="edit"
          sx={{ 
            fontSize: 30, 
            color: 'black', 
            backgroundColor: '#FF69B4', 
            '&:hover': { 
              backgroundColor: '#FF00FF' 
            },
            borderRadius: '4px', 
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)' 
          }}
        >   
          <EditIcon />
        </IconButton>
        )}
        
        {(userRole === 'ADMIN' || userRole === 'NASTAVNIK') && (
        <IconButton 
          onClick={() => navigate(`/subjects/delete/${id}`)} 
          aria-label="delete"
          sx={{ 
            fontSize: 30, 
            color: 'black', 
            backgroundColor: '#9e107b',
            '&:hover': { 
              backgroundColor: '#800080' 
            },
            borderRadius: '4px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)' 
          }}
        >   
          <DeleteIcon />
        </IconButton>
        )}
      </div>
      
    </div>
  );
};

export default SubjectDetails;

