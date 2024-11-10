// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { TextField, Button, Paper } from '@mui/material';
// import { useNavigate, useParams } from 'react-router-dom';

// const apiClient = axios.create({
//   baseURL: 'http://localhost:8080',
//   headers: {
//     'Authorization': 'Basic ' + btoa('admin:admin14993'),
//     'Content-Type': 'application/json',
//   }
// });

// const EditTeacher = () => {
//   const [imeNastavnika, setImeNastavnika] = useState('');
//   const [prezimeNastavnika, setPrezimeNastavnika] = useState('');
//   const navigate = useNavigate();
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchTeacher = async () => {
//       try {
//         const response = await apiClient.get(`/teacher/get/${id}`);
//         setImeNastavnika(response.data.imeNastavnika || '');
//         setPrezimeNastavnika(response.data.prezimeNastavnika || '');
//       } catch (error) {
//         console.error('Error fetching teacher:', error);
//       }
//     };

//     fetchTeacher();
//   }, [id]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await apiClient.put(`/teacher/update/${id}?novoImeNastavnika=${encodeURIComponent(imeNastavnika)}&novoPrezimeNastavnika=${encodeURIComponent(prezimeNastavnika)}`);
//       navigate('/teachers');
//     } catch (error) {
//       console.error('Error updating teacher:', error.response ? error.response.data : error.message);
//     }
//   };

//   return (
//     <Paper style={{ padding: '16px' }}>
//       <form onSubmit={handleSubmit}>
//         <TextField
//           label="Ime Nastavnika"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           value={imeNastavnika}
//           onChange={(e) => setImeNastavnika(e.target.value)}
//         />
//         <TextField
//           label="Prezime Nastavnika"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           value={prezimeNastavnika}
//           onChange={(e) => setPrezimeNastavnika(e.target.value)}
//         />
//         <Button type="submit" variant="contained" color="primary" style={{ marginTop: '16px' }}>
//           Azuriraj
//         </Button>
//       </form>
//     </Paper>
//   );
// };

// export default EditTeacher;





import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Paper, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Authorization': 'Basic ' + btoa('admin:admin14993'),
    'Content-Type': 'application/json',
  }
});

const EditTeacher = () => {
  const [imeNastavnika, setImeNastavnika] = useState('');
  const [prezimeNastavnika, setPrezimeNastavnika] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchTeacher = async () => {
      try {
        const response = await apiClient.get(`/teacher/get/${id}`);
        setImeNastavnika(response.data.imeNastavnika || '');
        setPrezimeNastavnika(response.data.prezimeNastavnika || '');
      } catch (error) {
        setError(error);
      }
    };

    fetchTeacher();
  }, [id]);

  const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await apiClient.put(`/teacher/update/${id}?novoImeNastavnika=${encodeURIComponent(imeNastavnika)}&novoPrezimeNastavnika=${encodeURIComponent(prezimeNastavnika)}`);
          navigate('/teachers');
        } catch (error) {
          console.error('Error updating teacher:', error.response ? error.response.data : error.message);
        }
      };

  return (
    <Paper elevation={3} style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Azuriraj nastavnika
      </Typography>
      {error && <Typography color="error" style={{ marginBottom: '16px' }}>Error: {error.message}</Typography>}
      {success && <Typography color="success" style={{ marginBottom: '16px' }}>Teacher updated successfully!</Typography>}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <TextField
          label="Ime Nastavnika"
          variant="outlined"
          fullWidth
          margin="normal"
          value={imeNastavnika}
          onChange={(e) => setImeNastavnika(e.target.value)}
          required
        />
        <TextField
          label="Prezime Nastavnika"
          variant="outlined"
          fullWidth
          margin="normal"
          value={prezimeNastavnika}
          onChange={(e) => setPrezimeNastavnika(e.target.value)}
          required
        />
        <Button 
          type="submit" 
          variant="contained" 
          sx={{ 
            backgroundColor: '#800080', 
            color: '#fff', 
            '&:hover': { 
              backgroundColor: '#600060' 
            },
            marginTop: '16px'
          }}
        >
          Azuriraj
        </Button>
      </form>
    </Paper>
  );
};

export default EditTeacher;