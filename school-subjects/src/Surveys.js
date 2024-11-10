import React, { useState } from 'react';
import './Surveys.css';

const Surveys = () => {
  const [surveys, setSurveys] = useState([
    { id: 1, title: 'Anketa 1', description: 'Opis ankete 1' },
    { id: 2, title: 'Anketa 2', description: 'Opis ankete 2' },
  ]);
  const [newSurvey, setNewSurvey] = useState({ title: '', description: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSurvey({ ...newSurvey, [name]: value });
  };

  const handleAddSurvey = () => {
    if (newSurvey.title && newSurvey.description) {
      setSurveys([...surveys, { ...newSurvey, id: surveys.length + 1 }]);
      setNewSurvey({ title: '', description: '' });
    }
  };

  return (
    <div className="surveys-container">
      <h2>Ankete</h2>
      <div className="survey-list">
        {surveys.map((survey) => (
          <div key={survey.id} className="survey-item">
            <h3>{survey.title}</h3>
            <p>{survey.description}</p>
            <button className="survey-button">Pogledaj</button>
          </div>
        ))}
      </div>
      <div className="new-survey-form">
        <h3>Kreiraj novu anketu</h3>
        <input
          type="text"
          name="title"
          placeholder="Naslov ankete"
          value={newSurvey.title}
          onChange={handleInputChange}
        />
        <textarea
          name="description"
          placeholder="Opis ankete"
          value={newSurvey.description}
          onChange={handleInputChange}
        ></textarea>
        <button className="add-survey-button" onClick={handleAddSurvey}>
          Dodaj Anketu
        </button>
      </div>
    </div>
  );
};

export default Surveys;