import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DeleteTeacher from './DeleteTeacher';
import './TeachersList.css';
import { useUserContext } from './App'; 


const TeachersList = () => {
 
  const [search, setSearch] = useState('');

  const { userRole } = useUserContext();


  const filteredTeachers = teachers.filter(teacher =>
    teacher.imeNastavnika.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id) => {
    setTeachers(teachers.filter(teacher => teacher.id !== id));
  };

  return (
    <div style={{ padding: '16px' }}>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: '16px', padding: '8px', width: '100%' }}
      />
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Ime</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Prezime</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>*</th>
          </tr>
        </thead>
        <tbody>
          {filteredTeachers.map((teacher) => (
            <tr key={teacher.id}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{teacher.imeNastavnika}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{teacher.prezimeNastavnika}</td>
              {(userRole === 'ADMIN' || userRole === 'NASTAVNIK') && (

              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                
                <Link to={`/teachers/edit/${teacher.id}`} style={{ textDecoration: 'none', marginRight: '8px' }}>
                  <button style={{ padding: '8px 16px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>Edit</button>
                </Link>
                <DeleteTeacher teacherId={teacher.id} onDelete={handleDelete} />
              </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      {(userRole === 'ADMIN' || userRole === 'NASTAVNIK') && (

      <Link to="/teachers/add" style={{ textDecoration: 'none', marginTop: '16px', display: 'inline-block' }}>
        <button style={{ padding: '8px 16px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px' }}>Add Teacher</button>
      </Link>
      )}
    </div>
  );
};

export default TeachersList;





