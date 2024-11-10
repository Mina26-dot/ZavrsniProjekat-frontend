import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteParent from './DeleteParent';
import './ParentList.css'; 

const ParentList = () => {
  const [parents, setParents] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchParents = async () => {
      try {
        const response = await axios.get('http://localhost:8080/parent/all');
        setParents(response.data.ArrayList || response.data); 
      } catch (error) {
        console.error('Error fetching parents:', error);
      }
    };

    fetchParents();
  }, []);

  const handleDelete = (id) => {
    setParents(parents.filter(parent => parent.id !== id));
  };

  const filteredParents = parents.filter(parent =>
    parent.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="parents-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </div>
      <div className="cards-container">
        {filteredParents.length > 0 ? (
          filteredParents.map((parent) => (
            <div key={parent.id} className="card">
              <h2>{parent.name}</h2>
              <h3>Additional Info: {parent.additionalInfo}</h3>
              <p>More details about the parent...</p>
              <div>
                <Link to={`/parents/edit/${parent.id}`} className="edit-button">Edit</Link>
                <DeleteParent parentId={parent.id} onDelete={handleDelete} />
              </div>
            </div>
          ))
        ) : (
          <p>Ucitavanje...</p>
        )}
      </div>
      <Link to="/parents/add" className="add-button">
        <button>Add Parent</button>
      </Link>
    </div>
  );
};

export default ParentList;