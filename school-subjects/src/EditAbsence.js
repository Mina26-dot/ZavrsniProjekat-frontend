import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditAbsence = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const [noviOpravdani, setNoviOpravdani] = useState('');
    const [noviNeopravdani, setNoviNeopravdani] = useState('');
    const [novDatumIzostanka, setNovDatumIzostanka] = useState('');
    const [ucenikId, setUcenikId] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const username = 'admin';
    const password = 'admin14993';
    const encodedCredentials = btoa(`${username}:${password}`);

    useEffect(() => {
        const fetchAbsence = async () => {
            try {
                const response = await fetch(`http://localhost:8080/absence/${id}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Basic ${encodedCredentials}`,
                    }
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setNoviOpravdani(data.opravdani || '');
                setNoviNeopravdani(data.neopravdani || '');
                setNovDatumIzostanka(data.datumIzostanka || '');
                setUcenikId(data.ucenik.id || ''); 
            } catch (error) {
                setError(error);
            }
        };

        fetchAbsence();
    }, [id, encodedCredentials]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const params = new URLSearchParams({
                noviOpravdani,
                noviNeopravdani,
                novDatumIzostanka,
                ucenik: ucenikId
            }).toString();
            
            const response = await fetch(`http://localhost:8080/absence/update/${id}?${params}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Basic ${encodedCredentials}`,
                },
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            setSuccess(true);
            navigate('/absences');
        } catch (error) {
            setError(error);
        }
    };

    return (
        <div>
            <h2>Azuriraj izostanak</h2>
            {error && <p>Error: {error.message}</p>}
            {success && <p>Absence updated successfully!</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Novi Opravdani:
                    <input
                        type="text"
                        value={noviOpravdani}
                        onChange={(e) => setNoviOpravdani(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Novi Neopravdani:
                    <input
                        type="text"
                        value={noviNeopravdani}
                        onChange={(e) => setNoviNeopravdani(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Novi Datum Izostanka:
                    <input
                        type="date"
                        value={novDatumIzostanka}
                        onChange={(e) => setNovDatumIzostanka(e.target.value)}
                        required
                    />
                </label>
                <label>
                    ID Ucenika:
                    <input
                        type="text"
                        value={ucenikId}
                        onChange={(e) => setUcenikId(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Azuriraj</button>
            </form>
        </div>
    );
};

export default EditAbsence;