// import React, { useEffect, useState, useCallback } from 'react';
// import { useNavigate } from 'react-router-dom'; 
// import { IconButton } from '@mui/material'; 
// import AddIcon from '@mui/icons-material/Add'; 
// import EditIcon from '@mui/icons-material/Edit'; 
// import DeleteIcon from '@mui/icons-material/Delete';
// import './ClassFetcher.css';
// import './ClassDetails';

// const ClassFetcher = () => {
//     const [data, setData] = useState([]);
//     const [error, setError] = useState(null);
//     const navigate = useNavigate(); 

//     const username = 'admin';
//     const password = 'admin14993'; 
//     const encodedCredentials = btoa(`${username}:${password}`);

//     const fetchData = useCallback(async () => {
//         try {
//             const response = await fetch('http://localhost:8080/class/all', {
//                 method: 'GET',
//                 headers: {
//                     'Authorization': `Basic ${encodedCredentials}`,
//                     'Content-Type': 'application/json'
//                 }
//             });
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             const result = await response.json();
//             setData(result.ArrayList || []);
//         } catch (error) {
//             setError(error);
//         }
//     }, [encodedCredentials]);

//     useEffect(() => {
//         fetchData();
//     }, [fetchData]);

//     const handleAddClick = () => {
//         navigate('/classes/add');
//     };

//     const handleUpdateClick = (id) => {
//         navigate(`/classes/edit/${id}`);
//     };

//     const handleDelete = async (id) => {
//         if (window.confirm('Da li ste sigurni da zelite da obrisete ovaj razred?')) {
//             try {
//                 const response = await fetch(`http://localhost:8080/class/${id}`, {
//                     method: 'DELETE',
//                     headers: {
//                         'Authorization': `Basic ${encodedCredentials}`,
//                     }
//                 });
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 fetchData();
//             } catch (error) {
//                 console.error('Error deleting class:', error);
//             }
//         }
//     };

//     const handleRowClick = (id) => {
//         navigate(`/classes/get/${id}`);

//     };

//     return (
//         <div className="class-container">
//             <div className="actions-container">
//                 <IconButton style={{ backgroundColor: '#800080' }} color="primary" onClick={handleAddClick}>
//                     Dodaj Razred
//                     <AddIcon />
//                 </IconButton>
//             </div>
//             {error && <p className="error-message">Error: {error.message}</p>}
//             {data.length > 0 ? (
//                 <table className="class-table">
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>Razred</th>
//                             <th>Odeljenje</th>
//                             <th>*</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {data.map(cls => (
//                             <tr 
//                                 key={cls.id} 
//                                 style={{ cursor: 'pointer' }}
//                                 onClick={() => handleRowClick(cls.id)}
//                             >
//                                 <td>{cls.id}</td>
//                                 <td>{cls.razredUcenika}</td>
//                                 <td>{cls.odeljenje}</td>
//                                 <td>
//                                     <IconButton color="primary" onClick={(e) => { e.stopPropagation(); handleUpdateClick(cls.id); }}>
//                                         <EditIcon />
//                                     </IconButton>
//                                     <IconButton
//                                         color="secondary"
//                                         onClick={(e) => { e.stopPropagation(); handleDelete(cls.id); }} 
//                                     >
//                                         <DeleteIcon />
//                                     </IconButton>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             ) : (
//                 <p>Ucitavanje...</p>
//             )}
//         </div>
//     );
// };

// export default ClassFetcher;












import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './ClassFetcher.css';
import './ClassDetails';

const ClassFetcher = ({ userRole }) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const username = 'admin';
    const password = 'admin14993';
    const encodedCredentials = btoa(`${username}:${password}`);

    const fetchData = useCallback(async () => {
        try {
            const response = await fetch('http://localhost:8080/class/all', {
                method: 'GET',
                headers: {
                    'Authorization': `Basic ${encodedCredentials}`,
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setData(result.ArrayList || []);
        } catch (error) {
            setError(error);
        }
    }, [encodedCredentials]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleAddClick = () => {
        navigate('/classes/add');
    };

    const handleUpdateClick = (id) => {
        navigate(`/classes/edit/${id}`);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Da li ste sigurni da zelite da obrisete ovaj razred?')) {
            try {
                const response = await fetch(`http://localhost:8080/class/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': `Basic ${encodedCredentials}`,
                    }
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                fetchData();
            } catch (error) {
                console.error('Error deleting class:', error);
            }
        }
    };

    const handleRowClick = (id) => {
        navigate(`/classes/get/${id}`);

    };

    return (
        <div className="class-container">
            {(userRole === 'ADMIN' || userRole === 'NASTAVNIK') && (

                <div className="actions-container">
                    <IconButton style={{ backgroundColor: '#800080' }} color="primary" onClick={handleAddClick}>
                        Dodaj Razred
                        <AddIcon />
                    </IconButton>
                </div>
            )}
            {error && <p className="error-message">Error: {error.message}</p>}
            {data.length > 0 ? (
                <table className="class-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Razred</th>
                            <th>Odeljenje</th>
                            <th>*</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(cls => (
                            <tr
                                key={cls.id}
                                style={{ cursor: 'pointer' }}
                                onClick={() => handleRowClick(cls.id)}
                            >
                                <td>{cls.id}</td>
                                <td>{cls.razredUcenika}</td>
                                <td>{cls.odeljenje}</td>
                                {(userRole === 'ADMIN' || userRole === 'NASTAVNIK') && (

                                    <td>
                                        <IconButton color="primary" onClick={(e) => { e.stopPropagation(); handleUpdateClick(cls.id); }}>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton
                                            color="secondary"
                                            onClick={(e) => { e.stopPropagation(); handleDelete(cls.id); }}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Ucitavanje...</p>
            )}
        </div>
    );
};

export default ClassFetcher;