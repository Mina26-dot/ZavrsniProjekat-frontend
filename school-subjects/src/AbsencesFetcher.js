// import React, { useEffect, useState, useCallback } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { IconButton } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import EditIcon from '@mui/icons-material/Edit';
// //import DeleteIcon from '@mui/icons-material/Delete';
// import './AbsencesFetcher.css';
// import DeleteAbsence from './DeleteAbsence'; 

// const AbsencesFetcher = () => {
//     const [data, setData] = useState([]);
//     const [error, setError] = useState(null);
//     const navigate = useNavigate();

//     const username = 'admin';
//     const password = 'admin14993';
//     const encodedCredentials = btoa(`${username}:${password}`);

//     const fetchData = useCallback(async () => {
//         try {
//             const response = await fetch('http://localhost:8080/absence/all', {
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
//         navigate('/absences/add');
//     };

//     const handleUpdateClick = (id) => {
//         navigate(`/absences/edit/${id}`);
//     };

//     const handleDelete = (id) => {
//         fetchData(); 
//     };

//     const handleStudentNameClick = (studentId, event) => {
//         event.stopPropagation(); 
//         navigate(`/absences/get/${studentId}`);
//     };

//     return (
//         <div className="absences-container">
//             {error && <p className="error-message">Error: {error.message}</p>}
//             <div className="actions-container">
//                 <IconButton
//                     color="primary"
//                     onClick={handleAddClick}
//                     sx={{
//                         backgroundColor: '#800080',
//                         color: '#fff',
//                         '&:hover': {
//                             backgroundColor: '#8B008B'
//                         }
//                     }}
//                 >   Dodaj izostanak
//                     <AddIcon />
//                 </IconButton>
//             </div>
//             {data && data.length > 0 ? (
//                 <table className="absences-table">
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>Opravdani</th>
//                             <th>Neopravdani</th>
//                             <th>Datum Izostanka</th>
//                             <th>Ime Ucenika</th>
//                             <th>Prezime Ucenika</th>
//                             <th>*</th> 
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {data.map(absence => (
//                             <tr key={absence.id}>
//                                 <td>{absence.id}</td>
//                                 <td>{absence.opravdani}</td>
//                                 <td>{absence.neopravdani}</td>
//                                 <td>{absence.datumIzostanka}</td>
//                                 <td
//                                     onClick={(e) => handleStudentNameClick(absence.ucenik.id, e)}
//                                     style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
//                                 >
//                                     {absence.ucenik.imeUcenika}
//                                 </td>
//                                 <td>{absence.ucenik.prezimeUcenika}</td>
//                                 <td>
//                                     <IconButton color="primary" onClick={() => handleUpdateClick(absence.id)}>
//                                         <EditIcon />
//                                     </IconButton>
//                                     <DeleteAbsence absenceId={absence.id} onDelete={handleDelete} />
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

// export default AbsencesFetcher;





















import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
//import DeleteIcon from '@mui/icons-material/Delete';
import './AbsencesFetcher.css';
import DeleteAbsence from './DeleteAbsence'; 

const AbsencesFetcher = ({ userRole }) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const username = 'admin';
    const password = 'admin14993';
    const encodedCredentials = btoa(`${username}:${password}`);

    const fetchData = useCallback(async () => {
        try {
            const response = await fetch('http://localhost:8080/absence/all', {
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
        navigate('/absences/add');
    };

    const handleUpdateClick = (id) => {
        navigate(`/absences/edit/${id}`);
    };

    const handleDelete = (id) => {
        fetchData(); 
    };

    const handleStudentNameClick = (studentId, event) => {
        event.stopPropagation(); 
        navigate(`/absences/get/${studentId}`);
    };

    return (
        <div className="absences-container">
            {error && <p className="error-message">Error: {error.message}</p>}
            {(userRole === 'ADMIN' || userRole === 'NASTAVNIK') && (

            <div className="actions-container">
                <IconButton
                    color="primary"
                    onClick={handleAddClick}
                    sx={{
                        backgroundColor: '#800080',
                        color: '#fff',
                        '&:hover': {
                            backgroundColor: '#8B008B'
                        }
                    }}
                >   Dodaj izostanak
                    <AddIcon />
                </IconButton>
            </div>
            )}
            {data && data.length > 0 ? (
                <table className="absences-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Opravdani</th>
                            <th>Neopravdani</th>
                            <th>Datum Izostanka</th>
                            <th>Ime Ucenika</th>
                            <th>Prezime Ucenika</th>
                            <th>*</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(absence => (
                            <tr key={absence.id}>
                                <td>{absence.id}</td>
                                <td>{absence.opravdani}</td>
                                <td>{absence.neopravdani}</td>
                                <td>{absence.datumIzostanka}</td>
                                <td
                                    onClick={(e) => handleStudentNameClick(absence.ucenik.id, e)}
                                    style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
                                >
                                    {absence.ucenik.imeUcenika}
                                </td>
                                <td>{absence.ucenik.prezimeUcenika}</td>
                                {(userRole === 'ADMIN' || userRole === 'NASTAVNIK') && (

                                <td>
                                    <IconButton color="primary" onClick={() => handleUpdateClick(absence.id)}>
                                        <EditIcon />
                                    </IconButton>
                                    <DeleteAbsence absenceId={absence.id} onDelete={handleDelete} />
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

export default AbsencesFetcher;