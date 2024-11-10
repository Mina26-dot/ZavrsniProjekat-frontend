import React, { useState } from 'react';
import './AddGrade.css';

const AddGrade = () => {
    const [novaOcena, setNovaOcena] = useState('');
    const [novaZakljucnaOcena, setNovaZakljucnaOcena] = useState('');
    const [prvoPolugodiste, setPrvoPolugodiste] = useState('');
    const [drugoPolugodiste, setDrugoPolugodiste] = useState('');
    const [usmeni, setUsmeni] = useState('');
    const [pismeni, setPismeni] = useState('');
    const [vladanje, setVladanje] = useState('');
    const [predmetId, setPredmetId] = useState('');
    const [nastavnikId, setNastavnikId] = useState('');
    const [ucenikId, setUcenikId] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const username = 'admin';
    const password = 'admin14993';
    const encodedCredentials = btoa(`${username}:${password}`);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const queryParams = new URLSearchParams({
                novaOcena,
                novaZakljucnaOcena,
                prvoPolugodiste,
                drugoPolugodiste,
                usmeni,
                pismeni,
                vladanje,
                predmetId,
                nastavnikId,
                ucenikId
            }).toString();

            const response = await fetch(`http://localhost:8080/grades/create?${queryParams}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Basic ${encodedCredentials}`,
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            setSuccess(true);
            setNovaOcena('');
            setNovaZakljucnaOcena('');
            setPrvoPolugodiste('');
            setDrugoPolugodiste('');
            setUsmeni('');
            setPismeni('');
            setVladanje('');
            setPredmetId('');
            setNastavnikId('');
            setUcenikId('');
        } catch (error) {
            setError(error);
        }
    };

    return (
        <div className="form-container">
            <h2>Dodaj ocenu</h2>
            {error && <p className="error-message">Error: {error.message}</p>}
            {success && <p className="success-message">Grade added successfully!</p>}
            <form onSubmit={handleSubmit} className="grade-form">
                <label>
                    Nova Ocena:
                    <input
                        type="number"
                        value={novaOcena}
                        onChange={(e) => setNovaOcena(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Nova Zakljucna Ocena:
                    <input
                        type="number"
                        value={novaZakljucnaOcena}
                        onChange={(e) => setNovaZakljucnaOcena(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Prvo Polugodiste:
                    <input
                        type="number"
                        value={prvoPolugodiste}
                        onChange={(e) => setPrvoPolugodiste(e.target.value)}
                    />
                </label>
                <label>
                    Drugo Polugodiste:
                    <input
                        type="number"
                        value={drugoPolugodiste}
                        onChange={(e) => setDrugoPolugodiste(e.target.value)}
                    />
                </label>
                <label>
                    Usmeni:
                    <input
                        type="number"
                        value={usmeni}
                        onChange={(e) => setUsmeni(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Pismeni:
                    <input
                        type="number"
                        value={pismeni}
                        onChange={(e) => setPismeni(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Vladanje:
                    <input
                        type="number"
                        value={vladanje}
                        onChange={(e) => setVladanje(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Predmet ID:
                    <input
                        type="text"
                        value={predmetId}
                        onChange={(e) => setPredmetId(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Nastavnik ID:
                    <input
                        type="text"
                        value={nastavnikId}
                        onChange={(e) => setNastavnikId(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Ucenik ID:
                    <input
                        type="text"
                        value={ucenikId}
                        onChange={(e) => setUcenikId(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Dodaj</button>
            </form>
        </div>
    );
};

export default AddGrade;