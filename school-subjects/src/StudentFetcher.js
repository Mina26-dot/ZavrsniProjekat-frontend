// import React, { useState, useEffect, useCallback } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { IconButton } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import SearchIcon from '@mui/icons-material/Search';
// import { Link } from 'react-router-dom';
// import './StudentFetcher.css';

// const StudentFetcher = () => {
//     const [data, setData] = useState(null);
//     const [error, setError] = useState(null);
//     const [search, setSearch] = useState('');

//     const navigate = useNavigate();

//     const username = 'admin';
//     const password = 'admin14993';

//     const encodedCredentials = btoa(`${username}:${password}`);

//     const fetchData = useCallback(async () => {
//         try {
//             const response = await fetch('http://localhost:8080/student/all', {
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

//     const handleSearch = (e) => {
//         setSearch(e.target.value);
//     };

    


//     const filteredData = data ? data.filter(student =>
//         student.imeUcenika.toLowerCase().includes(search.toLowerCase()) ||
//         student.prezimeUcenika.toLowerCase().includes(search.toLowerCase())
//     ) : [];

//     const handleUpdateClick = (id) => {
//         navigate(`/students/edit/${id}`);
//     };

//     const handleDeleteClick = async (id) => {
//         try {
//             const response = await fetch(`http://localhost:8080/student/delete/${id}`, {
//                 method: 'DELETE',
//                 headers: {
//                     'Authorization': `Basic ${encodedCredentials}`,
//                     'Content-Type': 'application/json'
//                 }
//             });
//             if (!response.ok) {
//                 throw new Error('Failed to delete student');
//             }
//             alert('Student deleted successfully');
//             fetchData();
//         } catch (error) {
//             setError(error);
//         }
//     };

//     return (
//         <div className="students-container">
//             {error && <p className="error-message">Error: {error.message}</p>}
//             <div className="actions-container">
            
//                 <IconButton
//                     color="primary"
//                     onClick={() => navigate('/students/add')}
//                     sx={{
//                         backgroundColor: '#8B008B',
//                         color: '#fff',
//                         '&:hover': {
//                             backgroundColor: '#800080'
//                         }
//                     }}
//                 >
//                     Dodaj ucenika
//                     <AddIcon />
//                 </IconButton>
            
//                 <div className="search-container">
//                     <input
//                         type="text"
//                         placeholder="Pretrazi ucenike..."
//                         value={search}
//                         onChange={handleSearch}
//                         className="search-input"
//                     />
//                     <IconButton color="default" onClick={() => handleSearch()}>
//                         <SearchIcon />
//                     </IconButton>
//                 </div>
//             </div>
//             {data && data.length > 0 ? (
//                 <table className="students-table">
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>Ime</th>
//                             <th>Prezime</th>
//                             <th>Roditelj</th>
//                             <th>Razred</th>
//                             <th>*</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {filteredData.map(student => (
//                             <tr key={student.id}>
//                                 <td>{student.id}</td>
//                                 <td>
//                                     <Link
//                                         to={`/students/get/${student.id}`}
//                                         style={{ cursor: 'pointer', color: 'purple', textDecoration: 'underline' }}
//                                     >
//                                         {student.imeUcenika}
//                                     </Link>
//                                 </td>
//                                 <td>{student.prezimeUcenika}</td>
//                                 <td>{student.roditelj ? `${student.roditelj.imeRoditelja} ${student.roditelj.prezimeRoditelja}` : 'N/A'}</td>
//                                 <td>{student.razred ? `${student.razred.razredUcenika} ${student.razred.odeljenje}` : 'N/A'}</td>
//                                 <td>
                           
//                                     <IconButton color="primary" onClick={() => handleUpdateClick(student.id)}>
//                                         <EditIcon />
//                                     </IconButton>,
//                                     <IconButton color="secondary" onClick={() => handleDeleteClick(student.id)}>
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

// export default StudentFetcher;























import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import './StudentFetcher.css';

const StudentFetcher = ({ userRole }) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState('');

    const navigate = useNavigate();

    const username = 'admin';
    const password = 'admin14993';

    const encodedCredentials = btoa(`${username}:${password}`);

    const fetchData = useCallback(async () => {
        try {
            const response = await fetch('http://localhost:8080/student/all', {
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

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    


    const filteredData = data ? data.filter(student =>
        student.imeUcenika.toLowerCase().includes(search.toLowerCase()) ||
        student.prezimeUcenika.toLowerCase().includes(search.toLowerCase())
    ) : [];

    const handleUpdateClick = (id) => {
        navigate(`/students/edit/${id}`);
    };

    const handleDeleteClick = async (id) => {
        try {
            const response = await fetch(`http://localhost:8080/student/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Basic ${encodedCredentials}`,
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Failed to delete student');
            }
            alert('Student deleted successfully');
            fetchData();
        } catch (error) {
            setError(error);
        }
    };

    return (

        <div className="students-container">
            {error && <p className="error-message">Error: {error.message}</p>}

            <div className="actions-container">
            {(userRole === 'ADMIN' || userRole === 'NASTAVNIK') && (

                <IconButton
                    color="primary"
                    onClick={() => navigate('/students/add')}
                    sx={{
                        backgroundColor: '#8B008B',
                        color: '#fff',
                        '&:hover': {
                            backgroundColor: '#800080'
                        }
                    }}
                >
                    Dodaj ucenika
                    <AddIcon />
                </IconButton>
            )}
            
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Pretrazi ucenike..."
                        value={search}
                        onChange={handleSearch}
                        className="search-input"
                    />
                    <IconButton color="default" onClick={() => handleSearch()}>
                        <SearchIcon />
                    </IconButton>
                </div>
            </div>
            {data && data.length > 0 ? (
                <table className="students-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Ime</th>
                            <th>Prezime</th>
                            <th>Roditelj</th>
                            <th>Razred</th>
                            <th>*</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map(student => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>
                                    <Link
                                        to={`/students/get/${student.id}`}
                                        style={{ cursor: 'pointer', color: 'purple', textDecoration: 'underline' }}
                                    >
                                        {student.imeUcenika}
                                    </Link>
                                </td>
                                <td>{student.prezimeUcenika}</td>
                                <td>{student.roditelj ? `${student.roditelj.imeRoditelja} ${student.roditelj.prezimeRoditelja}` : 'N/A'}</td>
                                <td>{student.razred ? `${student.razred.razredUcenika} ${student.razred.odeljenje}` : 'N/A'}</td>
                                {(userRole === 'ADMIN' || userRole === 'NASTAVNIK') && (

                                <td>
                           
                                    <IconButton color="primary" onClick={() => handleUpdateClick(student.id)}>
                                        <EditIcon />
                                    </IconButton>,
                                    <IconButton color="secondary" onClick={() => handleDeleteClick(student.id)}>
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

export default StudentFetcher;