// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './SubjectsList.css';

// const SubjectsList = () => {
  
//   const [search, setSearch] = useState('');

//   const filteredSubjects = subjects.filter(subject =>
//     subject.name.toLowerCase().includes(search.toLowerCase())
//   );

  

//   return (
//     <div className="subjects-container">
//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="search-input"
//         />
//       </div>

//       <div className="cards-container">
//         {filteredSubjects.length > 0 ? (
//           filteredSubjects.map((subject) => (
//             <div key={subject.id} className="card">
//               <h2>{subject.name}</h2>
//               <h3 className="card-subtitle">{subject.subtitle}</h3>
//               <p>{subject.info}</p>
//               <div className="card-actions">
//                 <Link to={`/subjects/get/${subject.id}`} className="show-button">
//                   Prikazi
//                 </Link>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>Ucitavanje...</p>
//         )}
//       </div>

//       <div className="actions-container">
//         <Link to="/subjects/add" className="add-button">
//           Dodaj predmet
//         </Link>
//         {filteredSubjects.length > 0 && (
//           <>
         
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SubjectsList;




// import React, { useState, useEffect, useCallback } from 'react';
// import { Link } from 'react-router-dom';
// import AddIcon from '@mui/icons-material/Add'; 
// import { useUserContext } from './App'; 

// const SubjectsList = () => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);
//   const [search, setSearch] = useState('');

//   const { userRole } = useUserContext(); 

//   const encodedCredentials = btoa('admin:admin14993'); // Zameni 'username:password' sa stvarnim podacima

//   const fetchData = useCallback(async () => {
//     try {
//       const response = await fetch('http://localhost:8080/subject/all', {
//         method: 'GET',
//         headers: {
//           'Authorization': `Basic ${encodedCredentials}`,
//           'Content-Type': 'application/json'
//         }
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const result = await response.json();
//       setData(result.ArrayList || []); 
//     } catch (error) {
//       setError(error.message);
//     }
//   }, []);

//   useEffect(() => {
//     fetchData();
//   }, [fetchData]);

//   const handleSearch = (event) => {
//     setSearch(event.target.value);
//   };

//   const filteredData = data.filter(subject =>
//     subject.imePredmeta.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="subjects-container">
//       {error && <p className="error-message">Error: {error}</p>}
//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Pretrazi predmete..."
//           value={search}
//           onChange={handleSearch}
//           className="search-input"
//         />
//       </div>
//       <div className="cards-container">
//         {filteredData.length > 0 ? (
//           filteredData.map(subject => (
//             <div key={subject.id} className="card">
//               <h2>{subject.imePredmeta}</h2>
//               <h3 className="card-subtitle">Nedeljni fond casova: {subject.nedeljniFondCasova}</h3>
//               <p>Razred: {subject.razred ? subject.razred.razredUcenika : 'N/A'}</p>
//               <div className="card-actions">
//                 <Link to={`/subjects/get/${subject.id}`} className="show-button">
//                   Prikazi
//                 </Link>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>Ucitavanje...</p>
//         )}
//       </div>
//       {(userRole === 'ADMIN' || userRole === 'NASTAVNIK') && (
//         <div className="actions-container">
//           <Link 
//             to="/subjects/add" 
//             className="add-button"
//             style={{ 
//               backgroundColor: '#800080',
//               color: 'white', 
//               padding: '10px 20px', 
//               textDecoration: 'none', 
//               borderRadius: '5px',
//               display: 'flex', 
//               alignItems: 'center' 
//             }}
//           >
//             <AddIcon sx={{ marginRight: 1 }} /> 
//             Dodaj predmet
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SubjectsList;






// import React, { useState, useEffect, useCallback } from 'react';
// import { Link } from 'react-router-dom'; // Standardni react-router-dom Link
// import { useUserContext } from './UserContext'; // Uvezi useUserContext iz UserContext.js

// const SubjectsList = () => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);
//   const [search, setSearch] = useState('');

//   const { userRole } = useUserContext(); // Pretpostavljam da imaš user role u kontekstu
  
//   const encodedCredentials = btoa('admin:admin14993'); // Zameni 'username:password' sa stvarnim podacima

//   const fetchData = useCallback(async () => {
//     try {
//       const response = await fetch('http://localhost:8080/subject/all', {
//         method: 'GET',
//         headers: {
//           'Authorization': `Basic ${encodedCredentials}`,
//           'Content-Type': 'application/json'
//         }
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const result = await response.json();
//       setData(result.ArrayList || []); 
//     } catch (error) {
//       setError(error.message);
//     }
//   }, []);

//   useEffect(() => {
//     fetchData();
//   }, [fetchData]);

//   const handleSearch = (event) => {
//     setSearch(event.target.value);
//   };

//   const filteredData = data.filter(subject =>
//     subject.imePredmeta.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
//       {error && <p style={{ color: 'red' }}>Error: {error}</p>}
//       <div style={{ marginBottom: '20px' }}>
//         <input
//           type="text"
//           placeholder="Pretrazi predmete..."
//           value={search}
//           onChange={handleSearch}
//           style={{
//             width: '100%',
//             padding: '10px',
//             fontSize: '16px',
//             border: '1px solid #ccc',
//             borderRadius: '4px'
//           }}
//         />
//       </div>
//       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
//         {filteredData.length > 0 ? (
//           filteredData.map(subject => (
//             <div key={subject.id} style={{
//               border: '1px solid #ddd',
//               borderRadius: '8px',
//               padding: '20px',
//               backgroundColor: '#f9f9f9',
//               width: 'calc(33% - 20px)' // Adjust the width to fit the number of cards per row
//             }}>
//               <h2>{subject.imePredmeta}</h2>
//               <h3 style={{ fontSize: '16px', margin: '10px 0' }}>Nedeljni fond casova: {subject.nedeljniFondCasova}</h3>
//               <p>Razred: {subject.razred ? subject.razred.razredUcenika : 'N/A'}</p>
//               <div style={{ marginTop: '20px' }}>
//                 <Link to={`/subjects/get/${subject.id}`} style={{
//                   textDecoration: 'none',
//                   color: '#007bff',
//                   fontSize: '16px'
//                 }}>
//                   Prikazi
//                 </Link>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>Ucitavanje...</p>
//         )}
//       </div>
//       {(userRole === 'ADMIN' || userRole === 'NASTAVNIK') && (
//         <div style={{ marginTop: '20px' }}>
//           <Link 
//             to="/subjects/add" 
//             style={{
//               display: 'inline-block',
//               padding: '10px 20px',
//               color: 'white',
//               backgroundColor: '#800080', // Purple color
//               textDecoration: 'none',
//               borderRadius: '5px',
//               fontSize: '16px'
//             }}
//           >
//             Dodaj predmet
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SubjectsList;











import React, { useState, useEffect, useCallback } from 'react';

const SubjectsList = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  const encodedCredentials = btoa('admin:admin14993');

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
    <div >
      {error && <p>Error: {error}</p>}
      <div>
        <input
          type="text"
          placeholder="Pretrazi predmete..."
          value={search}
          onChange={handleSearch}
         
        />
      </div>
      <div >
        {filteredData.length > 0 ? (
          filteredData.map(subject => (
            <div key={subject.id} 
            >
              <h2>{subject.imePredmeta}</h2>
              <h3>Nedeljni fond casova: {subject.nedeljniFondCasova}</h3>
              <p>Razred: {subject.razred ? subject.razred.razredUcenika : 'N/A'}</p>
            </div>
          ))
        ) : (
          <p>Ucitavanje...</p>
        )}
      </div>
    </div>
  );
};

export default SubjectsList;