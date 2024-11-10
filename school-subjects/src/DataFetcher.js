// import React, { useEffect, useState, useCallback } from 'react';
// import { Link } from 'react-router-dom';
// import './SubjectsList.css';
// import AddIcon from '@mui/icons-material/Add'; 



// const DataFetcher = () => {
//     const [data, setData] = useState([]);
//     const [error, setError] = useState(null);
//     const [search, setSearch] = useState('');
//     let [isHidden, setIsHidden] = useState(true)

//     const username = 'admin';
//     const password = 'admin14993';


//     const encodedCredentials = btoa(`${username}:${password}`);


//     const fetchData = useCallback(async () => {
//         try {
//             const response = await fetch('http://localhost:8080/subject/all', {
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
//             setError(error.message);
//         }
//     }, [encodedCredentials]);

//     useEffect(() => {
//         fetchData();
//     }, [fetchData]);

//     const handleSearch = (event) => {
//         setSearch(event.target.value);
//     };

//     if(username === 'admin') {
//         isHidden = false
//     } else {
//         isHidden = true
//     }

//     const filteredData = data.filter(subject =>
//         subject.imePredmeta.toLowerCase().includes(search.toLowerCase())
//     );

//     return (
//         <div className="subjects-container">
//             {error && <p className="error-message">Error: {error}</p>}
//             <div className="search-container">
//                 <input
//                     type="text"
//                     placeholder="Pretrazi predmete..."
//                     value={search}
//                     onChange={handleSearch}
//                     className="search-input"
//                 />
//             </div>
//             <div className="cards-container">
//                 {filteredData.length > 0 ? (
//                     filteredData.map(subject => (
//                         <div key={subject.id} className="card">
//                             <h2>{subject.imePredmeta}</h2>
//                             <h3 className="card-subtitle">Nedeljni fond casova: {subject.nedeljniFondCasova}</h3>
//                             <p>Razred: {subject.razred ? subject.razred.razredUcenika : 'N/A'}</p>
//                             <div className="card-actions">
//                             <Link to={`/subjects/get/${subject.id}`} className="show-button">
//                                 Prikazi
//                             </Link>
//                             </div>
//                         </div>
//                     ))
//                 ) : (
//                     <p>Ucitavanje...</p>
//                 )}
//             </div>
//             { !isHidden && (
//             <div className="actions-container">
//                 <Link 
//                     to="/subjects/add" 
//                     className="add-button"
//                     style={{ 
//                         backgroundColor: '#800080',
//                         color: 'white', 
//                         padding: '10px 20px', 
//                         textDecoration: 'none', 
//                         borderRadius: '5px',
//                         display: 'flex', 
//                         alignItems: 'center' 
//                     }}
//                 >
//                     <AddIcon sx={{ marginRight: 1 }} /> 
//                     Dodaj predmet
//                 </Link>
//             </div>
//             )}
//         </div>
//     );
// };

// export default DataFetcher;

























import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './DataFetcher.css';
import AddIcon from '@mui/icons-material/Add';

const DataFetcher = ({ userRole }) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState('');

    const username = 'admin';
    const password = 'admin14993';
    const encodedCredentials = btoa(`${username}:${password}`);

    const fetchData = useCallback(async () => {
        try {
            const response = await fetch('http://localhost:8080/subject/all', {
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
            setError(error.message);
        }
    }, [encodedCredentials]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    const filteredData = data.filter(subject =>
        subject.imePredmeta.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="subjects-container">
            {error && <p className="error-message">Error: {error}</p>}
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Pretrazi predmete..."
                    value={search}
                    onChange={handleSearch}
                    className="search-input"
                />
            </div>
            <div className="cards-container">
                {filteredData.length > 0 ? (
                    filteredData.map(subject => (
                        <div key={subject.id} className="card">
                            <h2>{subject.imePredmeta}</h2>
                            <h3 className="card-subtitle">Nedeljni fond casova: {subject.nedeljniFondCasova}</h3>
                            <p>Razred: {subject.razred ? subject.razred.razredUcenika : 'N/A'}</p>
                            <div className="card-actions">
                                <Link to={`/subjects/get/${subject.id}`} className="show-button">
                                    Prikazi
                                </Link>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Ucitavanje...</p>
                )}
            </div>
            {(userRole === 'ADMIN' || userRole === 'NASTAVNIK') && (
                <div className="actions-container">
                    <Link 
                        to="/subjects/add" 
                        className="add-button"
                        style={{ 
                            backgroundColor: '#800080',
                            color: 'white', 
                            padding: '10px 20px', 
                            textDecoration: 'none', 
                            borderRadius: '5px',
                            display: 'flex', 
                            alignItems: 'center' 
                        }}
                    >
                        <AddIcon sx={{ marginRight: 1 }} /> 
                        Dodaj predmet
                    </Link>
                </div>
            )}
        </div>
    );
};

export default DataFetcher;














