// import React from 'react';
// import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';

// const DeleteTeacher = ({ teacherId, onDelete }) => {
//     const username = 'admin';
//     const password = 'admin14993';
//     const encodedCredentials = btoa(`${username}:${password}`);

//     const handleDelete = async () => {
//         if (!teacherId) {
//             console.error('Teacher ID is missing');
//             return;
//         }

//         if (window.confirm('Da li ste sigurni da zelite da obrisete ovog nastavnika?')) {
//             try {
//                 const response = await fetch(`http://localhost:8080/teacher/delete/${teacherId}`, {
//                     method: 'DELETE',
//                     headers: {
//                         'Authorization': `Basic ${encodedCredentials}`,
//                     }
//                 });

//                 if (!response.ok) {
//                     const errorText = await response.text();
//                     throw new Error(`Neuspesan odgovor sa servera: ${errorText}`);
//                 }

//                 onDelete && onDelete();

//             } catch (error) {
//                 console.error('Greska pri brisanju nastavnika:', error);
//             }
//         }
//     };

//     return (
//         <IconButton 
//             onClick={handleDelete} 
//             color="error"
//             aria-label="delete"
//             sx={{ 
//                 color: '#800080',
//                 '&:hover': {
//                     color: '#600060' 
//                 },
//                 fontSize: 30 
//             }}
//         >
//             <DeleteIcon />
//         </IconButton>
//     );
// };

// export default DeleteTeacher;







import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const DeleteTeacher = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [teacher, setTeacher] = useState(null);
    const [error, setError] = useState(null);

    const username = 'admin';
    const password = 'admin14993';
    const encodedCredentials = btoa(`${username}:${password}`);

    useEffect(() => {
        const fetchTeacher = async () => {
            try {
                const response = await fetch(`http://localhost:8080/teacher/get/${id}`, {
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
                setTeacher(data.Nastavnik1Entity);
            } catch (error) {
                setError(error);
            }
        };

        fetchTeacher();
    }, [id, encodedCredentials]);

    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:8080/teacher/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Basic ${encodedCredentials}`,
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            navigate('/teachers');
        } catch (error) {
            setError(error);
        }
    };

    const handleCancel = () => {
        navigate('/teachers');
    };

    return (
        <div>
            <h2>Obrisi Nastavnika</h2>
            {error && <p>Error: {error.message}</p>}
            {teacher ? (
                <div>
                    <p>Da li ste sigurni da zelite da izbrisete nastavnika <strong>{teacher.imeNastavnika} {teacher.prezimeNastavnika}</strong>?</p>
                    <button onClick={handleDelete} style={{ color: 'red', marginRight: '10px' }}>
                        Da
                    </button>
                    <button onClick={handleCancel}>
                        Ne
                    </button>
                </div>
            ) : (
                <p>Ucitavanje...</p>
            )}
        </div>
    );
};

export default DeleteTeacher;