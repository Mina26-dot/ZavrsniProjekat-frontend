// import React, { useState, useEffect, useCallback } from 'react';
// import { useNavigate } from 'react-router-dom';
// import IconButton from '@mui/material/IconButton';
// import EditIcon from '@mui/icons-material/Edit';
// import AddIcon from '@mui/icons-material/Add';
// import './TeachersFetcher.css';
//  import DeleteTeacher from './DeleteTeacher'; 

// const TeachersFetcher = () => {
//     const [data, setData] = useState([]);
//     const [error, setError] = useState(null);
//     const [search, setSearch] = useState('');
//     let [isHidden, setIsHidden] = useState(true)


//     const navigate = useNavigate();

//     const username = 'admin';
//     const password = 'admin14993';

//     const encodedCredentials = btoa(`${username}:${password}`);

//     const fetchData = useCallback(async () => {
//         try {
//             const response = await fetch('http://localhost:8080/teacher/all', {
//                 method: 'GET',
//                 headers: {
//                     'Authorization': `Basic ${encodedCredentials}`,
//                     'Content-Type': 'application/json'
//                 }
//             });
//             if (!response.ok) {
//                 throw new Error('Neuspesan odgovor sa servera');
//             }
//             const result = await response.json();
//             setData(result.ArrayList || []);
//         } catch (error) {
//             setError('Neuspešno preuzimanje podataka. Molimo pokušajte ponovo.'); 
//         }
//     }, [encodedCredentials]);

//     useEffect(() => {
//         fetchData();
//     }, [fetchData]);

//     const handleSearch = (e) => {
//         setSearch(e.target.value);
//     };


//     if(username === 'admin') {
//         isHidden = false
//     } else {
//         isHidden = true
//     }

//     const filteredData = data.filter(teacher =>
//         teacher.imeNastavnika.toLowerCase().includes(search.toLowerCase()) ||
//         teacher.prezimeNastavnika.toLowerCase().includes(search.toLowerCase())
//     );

//     const handleNameClick = (id) => {
//         navigate(`/teachers/get/${id}`);
//     };

//     const handleUpdateClick = (id) => {
//         navigate(`/teachers/edit/${id}`);
//     };

//     const handleDelete = (id) => {
//         fetchData();
//     };

//     return (
//         <div className="teachers-container">
//             {error && <p className="error-message" style={{ color: 'red' }}>{error}</p>}
//             <div className="actions-container">
//             { !isHidden && (
//                 <IconButton
//                     onClick={() => navigate('/teachers/add')}
//                     color="primary"
//                     aria-label="add teacher"
//                     sx={{
//                         margin: '8px',
//                         backgroundColor: '#9e107b',
//                         color: '#fff',
//                         '&:hover': {
//                             backgroundColor: '#800080',
//                             color: '#fff'
//                         },
//                         padding: '8px',
//                         borderRadius: '4px',
//                         boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
//                     }}
//                 >
//                     Dodaj Nastavnika
//                     <AddIcon />
//                 </IconButton>
//             )}
//                 <div className="search-container">
//                     <input
//                         type="text"
//                         placeholder="Pretrazi nastavnike..."
//                         value={search}
//                         onChange={handleSearch}
//                         className="search-input"
//                     />
//                 </div>
//             </div>
//             {data.length > 0 ? (
//                 <table className="teachers-table">
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>Ime</th>
//                             <th>Prezime</th>
//                             <th>*</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {filteredData.map(teacher => (
//                             <tr key={teacher.id}>
//                                 <td>{teacher.id}</td>
//                                 <td>
//                                     <span
//                                         onClick={() => handleNameClick(teacher.id)}
//                                         style={{ cursor: 'pointer', color: 'Purple', textDecoration: 'underline' }}
//                                     >
//                                         {teacher.imeNastavnika}
//                                     </span>
//                                 </td>
//                                 <td>{teacher.prezimeNastavnika}</td>
//                                 <td>
//                                 { !isHidden && (
//                                     <IconButton
//                                         onClick={() => handleUpdateClick(teacher.id)}
//                                         color="primary"
//                                         aria-label="edit"
//                                         sx={{
//                                             color: 'Blue',
//                                             backgroundColor: '#f0f0f0',
//                                             '&:hover': { backgroundColor: '#e0e0e0' }
//                                         }}
//                                     >

//                                         <EditIcon />
//                                     </IconButton>
//                                 )}
//                                 { !isHidden && (
//                                     <DeleteTeacher
//                                         teacherId={teacher.id}
//                                         onDelete={handleDelete}

//                                     />
//                                 )}

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

// export default TeachersFetcher;










// import React, { useState, useEffect, useCallback } from 'react';
// import { useNavigate } from 'react-router-dom';
// import IconButton from '@mui/material/IconButton';
// import EditIcon from '@mui/icons-material/Edit';
// import AddIcon from '@mui/icons-material/Add';
// import DeleteIcon from '@mui/icons-material/Delete';
// import './TeachersFetcher.css';

// const TeachersFetcher = () => {
//     const [data, setData] = useState([]);
//     const [error, setError] = useState(null);
//     const [search, setSearch] = useState('');
//     let [isHidden, setIsHidden] = useState(true);

//     const navigate = useNavigate();

//     const username = 'admin';
//     const password = 'admin14993';

//     const encodedCredentials = btoa(`${username}:${password}`);

//     const fetchData = useCallback(async () => {
//         try {
//             const response = await fetch('http://localhost:8080/teacher/all', {
//                 method: 'GET',
//                 headers: {
//                     'Authorization': `Basic ${encodedCredentials}`,
//                     'Content-Type': 'application/json'
//                 }
//             });
//             if (!response.ok) {
//                 throw new Error('Neuspesan odgovor sa servera');
//             }
//             const result = await response.json();
//             setData(result.ArrayList || []);
//         } catch (error) {
//             setError('Neuspešno preuzimanje podataka. Molimo pokušajte ponovo.'); 
//         }
//     }, [encodedCredentials]);

//     useEffect(() => {
//         fetchData();
//     }, [fetchData]);

//     const handleSearch = (e) => {
//         setSearch(e.target.value);
//     };

//     if (username === 'admin') {
//         isHidden = false;
//     } else {
//         isHidden = true;
//     }

//     const filteredData = data.filter(teacher =>
//         teacher.imeNastavnika.toLowerCase().includes(search.toLowerCase()) ||
//         teacher.prezimeNastavnika.toLowerCase().includes(search.toLowerCase())
//     );

//     const handleNameClick = (id) => {
//         navigate(`/teachers/get/${id}`);
//     };

//     const handleUpdateClick = (id) => {
//         navigate(`/teachers/edit/${id}`);
//     };

//     const handleDeleteClick = (id) => {
//         navigate(`/teachers/delete/${id}`);
//     };

//     return (
//         <div className="teachers-container">
//             {error && <p className="error-message" style={{ color: 'red' }}>{error}</p>}
//             <div className="actions-container">
//                 { !isHidden && (
//                     <IconButton
//                         onClick={() => navigate('/teachers/add')}
//                         color="primary"
//                         aria-label="add teacher"
//                         sx={{
//                             margin: '8px',
//                             backgroundColor: '#9e107b',
//                             color: '#fff',
//                             '&:hover': {
//                                 backgroundColor: '#800080',
//                                 color: '#fff'
//                             },
//                             padding: '8px',
//                             borderRadius: '4px',
//                             boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
//                         }}
//                     >
//                         Dodaj Nastavnika
//                         <AddIcon />
//                     </IconButton>
//                 )}
//                 <div className="search-container">
//                     <input
//                         type="text"
//                         placeholder="Pretrazi nastavnike..."
//                         value={search}
//                         onChange={handleSearch}
//                         className="search-input"
//                     />
//                 </div>
//             </div>
//             {data.length > 0 ? (
//                 <table className="teachers-table">
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>Ime</th>
//                             <th>Prezime</th>
//                             <th>*</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {filteredData.map(teacher => (
//                             <tr key={teacher.id}>
//                                 <td>{teacher.id}</td>
//                                 <td>
//                                     <span
//                                         onClick={() => handleNameClick(teacher.id)}
//                                         style={{ cursor: 'pointer', color: 'Purple', textDecoration: 'underline' }}
//                                     >
//                                         {teacher.imeNastavnika}
//                                     </span>
//                                 </td>
//                                 <td>{teacher.prezimeNastavnika}</td>
//                                 <td>
//                                     { !isHidden && (
//                                         <IconButton
//                                             onClick={() => handleUpdateClick(teacher.id)}
//                                             color="primary"
//                                             aria-label="edit"
//                                             sx={{
//                                                 color: 'Blue',
//                                                 backgroundColor: '#f0f0f0',
//                                                 '&:hover': { backgroundColor: '#e0e0e0' }
//                                             }}
//                                         >
//                                             <EditIcon />
//                                         </IconButton>
//                                     )}
//                                     { !isHidden && (
//                                         <IconButton
//                                             onClick={() => handleDeleteClick(teacher.id)}
//                                             color="primary"
//                                             aria-label="delete"
//                                             sx={{
//                                                 color: 'Purple',
//                                                 backgroundColor: '#f0f0f0',
//                                                 '&:hover': { backgroundColor: '#e0e0e0' }
//                                             }}
//                                         >
//                                             <DeleteIcon />
//                                         </IconButton>
//                                     )}
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

// export default TeachersFetcher;












import React, { useState, useEffect, useCallback } from 'react';
//import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import './TeachersFetcher.css';

const TeachersFetcher = ({ userRole }) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState('');
    //let [isHidden, setIsHidden] = useState(true);

    const navigate = useNavigate();

    const username = 'admin';
    const password = 'admin14993';

    const encodedCredentials = btoa(`${username}:${password}`);

    const fetchData = useCallback(async () => {
        try {
            const response = await fetch('http://localhost:8080/teacher/all', {
                method: 'GET',
                headers: {
                    'Authorization': `Basic ${encodedCredentials}`,
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Neuspesan odgovor sa servera');
            }
            const result = await response.json();
            setData(result.ArrayList || []);
        } catch (error) {
            setError('Neuspesno preuzimanje podataka. Molimo pokusajte ponovo.');
        }
    }, [encodedCredentials]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    // if (username === 'admin') {
    //     isHidden = false;
    // } else {
    //     isHidden = true;
    // }

    const filteredData = data.filter(teacher =>
        teacher.imeNastavnika.toLowerCase().includes(search.toLowerCase()) ||
        teacher.prezimeNastavnika.toLowerCase().includes(search.toLowerCase())
    );

    const handleNameClick = (id) => {
        navigate(`/teachers/get/${id}`);
    };

    const handleUpdateClick = (id) => {
        navigate(`/teachers/edit/${id}`);
    };

    const handleDeleteClick = (id) => {
        navigate(`/teachers/delete/${id}`);
    };

    return (
        <div className="teachers-container">
            {error && <p className="error-message" style={{ color: 'red' }}>{error}</p>}
            <div className="actions-container">
                {(userRole === 'ADMIN' || userRole === 'NASTAVNIK') && (
                    <IconButton
                        onClick={() => navigate('/teachers/add')}
                        color="primary"
                        aria-label="add teacher"
                        sx={{
                            margin: '8px',
                            backgroundColor: '#9e107b',
                            color: '#fff',
                            '&:hover': {
                                backgroundColor: '#800080',
                                color: '#fff'
                            },
                            padding: '8px',
                            borderRadius: '4px',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                        }}
                    >
                        Dodaj Nastavnika
                        <AddIcon />
                    </IconButton>
                )}
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Pretrazi nastavnike..."
                        value={search}
                        onChange={handleSearch}
                        className="search-input"
                    />
                </div>
            </div>
            {data.length > 0 ? (
                <table className="teachers-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Ime</th>
                            <th>Prezime</th>
                            <th>*</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map(teacher => (
                            <tr key={teacher.id}>
                                <td>{teacher.id}</td>
                                <td>
                                    <span
                                        onClick={() => handleNameClick(teacher.id)}
                                        style={{ cursor: 'pointer', color: 'Purple', textDecoration: 'underline' }}
                                    >
                                        {teacher.imeNastavnika}
                                    </span>
                                </td>
                                <td>{teacher.prezimeNastavnika}</td>
                                <td>
                                    {(userRole === 'ADMIN' || userRole === 'NASTAVNIK') && (
                                        <IconButton
                                            onClick={() => handleUpdateClick(teacher.id)}
                                            color="primary"
                                            aria-label="edit"
                                            sx={{
                                                color: 'Blue',
                                                backgroundColor: '#f0f0f0',
                                                '&:hover': { backgroundColor: '#e0e0e0' }
                                            }}
                                        >
                                            <EditIcon />
                                        </IconButton>
                                    )}
                                    {(userRole === 'ADMIN' || userRole === 'NASTAVNIK') && (
                                        <IconButton
                                            onClick={() => handleDeleteClick(teacher.id)}
                                            color="primary"
                                            aria-label="delete"
                                            sx={{
                                                color: 'Purple',
                                                backgroundColor: '#f0f0f0',
                                                '&:hover': { backgroundColor: '#e0e0e0' }
                                            }}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    )}
                                </td>
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

export default TeachersFetcher;





