// import React, { useEffect, useState, useCallback } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import './GradesFetcher.css';
// import { IconButton, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';

// const GradesFetcher = () => {
//     const [data, setData] = useState([]);
//     const [error, setError] = useState(null);
//     const [selectedGrade, setSelectedGrade] = useState(null);
//     const [editDialogOpen, setEditDialogOpen] = useState(false);
//     const [formValues, setFormValues] = useState({
//         ocena: '',
//         prvoPolugodiste: '',
//         drugoPolugodiste: '',
//         pismeni: '',
//         usmeni: '',
//         zakljucnaOcena: '',
//         vladanje: ''
//     });
//     const [userRole, setUserRole] = useState(''); 

//     const username = 'admin';
//     const password = 'admin14993';
//     const encodedCredentials = btoa(`${username}:${password}`);

//     const navigate = useNavigate();

//     const fetchData = useCallback(async () => {
//         try {
//             const response = await fetch('http://localhost:8080/grades/all', {
//                 method: 'GET',
//                 headers: {
//                     'Authorization': `Basic ${encodedCredentials}`,
//                     'Content-Type': 'application/json'
//                 }
//             });
//             if (!response.ok) {
//                 throw new Error('Mrežni odgovor nije bio u redu');
//             }
//             const result = await response.json();
//             setData(result.ArrayList || []);
//         } catch (error) {
//             setError(error);
//         }
//     }, [encodedCredentials]);

//     useEffect(() => {
//         fetchData();
//         setUserRole('ADMIN');
//     }, [fetchData]);

//     const handleEditClick = (grade) => {
//         setSelectedGrade(grade);
//         setFormValues({
//             ocena: grade.ocena,
//             prvoPolugodiste: grade.prvoPolugodiste,
//             drugoPolugodiste: grade.drugoPolugodiste,
//             pismeni: grade.pismeni,
//             usmeni: grade.usmeni,
//             zakljucnaOcena: grade.zakljucnaOcena,
//             vladanje: grade.vladanje
//         });
//         setEditDialogOpen(true);
//     };

//     const handleDeleteClick = async (id) => {
//         if (window.confirm('Da li ste sigurni da zelite da obrizete ovu ocenu?')) {
//             try {
//                 const response = await fetch(`http://localhost:8080/grades/${id}`, {
//                     method: 'DELETE',
//                     headers: {
//                         'Authorization': `Basic ${encodedCredentials}`,
//                         'Content-Type': 'application/json'
//                     }
//                 });
//                 if (!response.ok) {
//                     const errorText = await response.text();
//                     throw new Error(`Mrežni odgovor nije bio u redu: ${errorText}`);
//                 }
//                 fetchData(); 
//             } catch (error) {
//                 setError(error);
//             }
//         }
//     };

//     const handleFormChange = (e) => {
//         const { name, value } = e.target;
//         setFormValues(prev => ({ ...prev, [name]: value }));
//     };

//     const handleUpdate = async () => {
//         try {
//             const response = await fetch(`http://localhost:8080/grades/update/${selectedGrade.idOcene}`, {
//                 method: 'PUT',
//                 headers: {
//                     'Authorization': `Basic ${encodedCredentials}`,
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(formValues)
//             });
//             if (!response.ok) {
//                 const errorText = await response.text();
//                 throw new Error(`Mrežni odgovor nije bio u redu: ${errorText}`);
//             }
//             setEditDialogOpen(false);
//             fetchData(); 
//         } catch (error) {
//             setError(error);
//         }
//     };

//     return (
//         <div className="grades-container">
//             <div className="actions-container">
//                 {userRole === 'ADMIN' && (
//                     <IconButton
//                         sx={{ backgroundColor: 'purple', color: 'white', '&:hover': { backgroundColor: 'purple' } }}
//                         onClick={() => navigate('/grades/add')}
//                         color="primary"
//                     >
//                         Dodaj Ocenu
//                         <AddIcon />
//                     </IconButton>
//                 )}


//             </div>
//             {error && <p className="error-message">Greška: {error.message}</p>}
//             {data && data.length > 0 ? (
//                 <table className="grades-table">
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>Ocena</th>
//                             <th>Prvo Polugodiste</th>
//                             <th>Drugo Polugodiste</th>
//                             <th>Zakljucna Ocena</th>
//                             <th>Vladanje</th>
//                             <th>Pismeni</th>
//                             <th>Usmeni</th>
//                             <th>Predmet</th>
//                             <th>Nastavnik</th>
//                             <th>Ucenik</th>
//                             <th>*</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {data.map(grade => (
//                             <tr key={grade.idOcene}>
//                                 <td>{grade.idOcene}</td>
//                                 <td>{grade.ocena}</td>
//                                 <td>{grade.prvoPolugodiste}</td>
//                                 <td>{grade.drugoPolugodiste}</td>
//                                 <td>{grade.zakljucnaOcena}</td>
//                                 <td>{grade.vladanje}</td>
//                                 <td>{grade.pismeni}</td>
//                                 <td>{grade.usmeni}</td>
//                                 <td>{grade.predmet ? grade.predmet.imePredmeta : 'N/A'}</td>
//                                 <td>{grade.predmet && grade.predmet.nastavnik ? `${grade.predmet.nastavnik.imeNastavnika} ${grade.predmet.nastavnik.prezimeNastavnika}` : 'N/A'}</td>
//                                 <td>
//                                     {grade.ucenik ? (
//                                         <Link to={`/grades/get/${grade.idOcene}`} style={{ textDecoration: 'none', color: 'blue' }}>
//                                             {`${grade.ucenik.imeUcenika} ${grade.ucenik.prezimeUcenika}`}
//                                         </Link>
//                                     ) : 'N/A'}
//                                 </td>
//                                 {(userRole === 'ADMIN' || userRole === 'NASTAVNIK') && (
//                                     <td>
//                                         {userRole === 'ADMIN' && (
//                                             <>
//                                                 <Link to={`/grades/edit/${grade.idOcene}`}>
//                                                     <IconButton
//                                                         className="action-button edit-button"
//                                                         onClick={() => handleEditClick(grade)}
//                                                         color="primary"
//                                                     >
//                                                         <EditIcon />
//                                                     </IconButton>
//                                                 </Link>
//                                                 <IconButton
//                                                     className="action-button delete-button"
//                                                     onClick={() => handleDeleteClick(grade.idOcene)}
//                                                     color="secondary"
//                                                 >
//                                                     <DeleteIcon />
//                                                 </IconButton>
//                                             </>
//                                         )}
//                                     </td>
//                                 )}
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             ) : (
//                 <p>Ucitavanje...</p>
//             )}

//             <Dialog
//                 open={editDialogOpen}
//                 onClose={() => setEditDialogOpen(false)}
//             >
//                 <DialogTitle>Ažuriraj Ocenu</DialogTitle>
//                 <DialogContent>
//                     <TextField
//                         margin="dense"
//                         name="ocena"
//                         label="Ocena"
//                         type="number"
//                         fullWidth
//                         value={formValues.ocena}
//                         onChange={handleFormChange}
//                     />
//                     <TextField
//                         margin="dense"
//                         name="prvoPolugodiste"
//                         label="Prvo Polugodiste"
//                         type="number"
//                         fullWidth
//                         value={formValues.prvoPolugodiste}
//                         onChange={handleFormChange}
//                     />
//                     <TextField
//                         margin="dense"
//                         name="drugoPolugodiste"
//                         label="Drugo Polugodiste"
//                         type="number"
//                         fullWidth
//                         value={formValues.drugoPolugodiste}
//                         onChange={handleFormChange}
//                     />
//                     <TextField
//                         margin="dense"
//                         name="pismeni"
//                         label="Pismeni Ispit"
//                         type="number"
//                         fullWidth
//                         value={formValues.pismeni}
//                         onChange={handleFormChange}
//                     />
//                     <TextField
//                         margin="dense"
//                         name="usmeni"
//                         label="Usmeni Ispit"
//                         type="number"
//                         fullWidth
//                         value={formValues.usmeni}
//                         onChange={handleFormChange}
//                     />
//                     <TextField
//                         margin="dense"
//                         name="zakljucnaOcena"
//                         label="Zaključna Ocena"
//                         type="number"
//                         fullWidth
//                         value={formValues.zakljucnaOcena}
//                         onChange={handleFormChange}
//                     />
//                     <TextField
//                         margin="dense"
//                         name="vladanje"
//                         label="Vladanje"
//                         type="number"
//                         fullWidth
//                         value={formValues.vladanje}
//                         onChange={handleFormChange}
//                     />
//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={() => setEditDialogOpen(false)}>Otkazi</Button>
//                     <Button onClick={handleUpdate} color="primary">Azuriraj</Button>
//                 </DialogActions>
//             </Dialog>
//         </div>
//     );
// };

// export default GradesFetcher;















import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './GradesFetcher.css';
import { IconButton, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const GradesFetcher = ({ userRole }) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [selectedGrade, setSelectedGrade] = useState(null);
    const [editDialogOpen, setEditDialogOpen] = useState(false);
    const [formValues, setFormValues] = useState({
        ocena: '',
        prvoPolugodiste: '',
        drugoPolugodiste: '',
        pismeni: '',
        usmeni: '',
        zakljucnaOcena: '',
        vladanje: ''
    });
    //const [userRole, setUserRole] = useState(''); 

    const username = 'admin';
    const password = 'admin14993';
    const encodedCredentials = btoa(`${username}:${password}`);

    const navigate = useNavigate();

    const fetchData = useCallback(async () => {
        try {
            const response = await fetch('http://localhost:8080/grades/all', {
                method: 'GET',
                headers: {
                    'Authorization': `Basic ${encodedCredentials}`,
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Mrežni odgovor nije bio u redu');
            }
            const result = await response.json();
            setData(result.ArrayList || []);
        } catch (error) {
            setError(error);
        }
    }, [encodedCredentials]);

    useEffect(() => {
        fetchData();
       // setUserRole('ADMIN');
    }, [fetchData]);

    const handleEditClick = (grade) => {
        setSelectedGrade(grade);
        setFormValues({
            ocena: grade.ocena,
            prvoPolugodiste: grade.prvoPolugodiste,
            drugoPolugodiste: grade.drugoPolugodiste,
            pismeni: grade.pismeni,
            usmeni: grade.usmeni,
            zakljucnaOcena: grade.zakljucnaOcena,
            vladanje: grade.vladanje
        });
        setEditDialogOpen(true);
    };

    const handleDeleteClick = async (id) => {
        if (window.confirm('Da li ste sigurni da zelite da obrizete ovu ocenu?')) {
            try {
                const response = await fetch(`http://localhost:8080/grades/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': `Basic ${encodedCredentials}`,
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`Mrežni odgovor nije bio u redu: ${errorText}`);
                }
                fetchData(); 
            } catch (error) {
                setError(error);
            }
        }
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormValues(prev => ({ ...prev, [name]: value }));
    };

    const handleUpdate = async () => {
        try {
            const response = await fetch(`http://localhost:8080/grades/update/${selectedGrade.idOcene}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Basic ${encodedCredentials}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formValues)
            });
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Mrežni odgovor nije bio u redu: ${errorText}`);
            }
            setEditDialogOpen(false);
            fetchData(); 
        } catch (error) {
            setError(error);
        }
    };

    return (
        <div className="grades-container">
                        {(userRole === 'ADMIN' || userRole === 'NASTAVNIK') && (

            <div className="actions-container">
                    <IconButton
                        sx={{ backgroundColor: 'purple', color: 'white', '&:hover': { backgroundColor: 'purple' } }}
                        onClick={() => navigate('/grades/add')}
                        color="primary"
                    >
                        Dodaj Ocenu
                        <AddIcon />
                    </IconButton>
            </div>
                        )}
            {error && <p className="error-message">Greška: {error.message}</p>}
            {data && data.length > 0 ? (
                <table className="grades-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Ocena</th>
                            <th>Prvo Polugodiste</th>
                            <th>Drugo Polugodiste</th>
                            <th>Zakljucna Ocena</th>
                            <th>Vladanje</th>
                            <th>Pismeni</th>
                            <th>Usmeni</th>
                            <th>Predmet</th>
                            <th>Nastavnik</th>
                            <th>Ucenik</th>
                            <th>*</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(grade => (
                            <tr key={grade.idOcene}>
                                <td>{grade.idOcene}</td>
                                <td>{grade.ocena}</td>
                                <td>{grade.prvoPolugodiste}</td>
                                <td>{grade.drugoPolugodiste}</td>
                                <td>{grade.zakljucnaOcena}</td>
                                <td>{grade.vladanje}</td>
                                <td>{grade.pismeni}</td>
                                <td>{grade.usmeni}</td>
                                <td>{grade.predmet ? grade.predmet.imePredmeta : 'N/A'}</td>
                                <td>{grade.predmet && grade.predmet.nastavnik ? `${grade.predmet.nastavnik.imeNastavnika} ${grade.predmet.nastavnik.prezimeNastavnika}` : 'N/A'}</td>
                                <td>
                                    {grade.ucenik ? (
                                        <Link to={`/grades/get/${grade.idOcene}`} style={{ textDecoration: 'none', color: 'blue' }}>
                                            {`${grade.ucenik.imeUcenika} ${grade.ucenik.prezimeUcenika}`}
                                        </Link>
                                    ) : 'N/A'}
                                </td>
                                {(userRole === 'ADMIN' || userRole === 'NASTAVNIK') && (
                                    <td>
                                            <>
                                                <Link to={`/grades/edit/${grade.idOcene}`}>
                                                    <IconButton
                                                        className="action-button edit-button"
                                                        onClick={() => handleEditClick(grade)}
                                                        color="primary"
                                                    >
                                                        <EditIcon />
                                                    </IconButton>
                                                </Link>
                                                <IconButton
                                                    className="action-button delete-button"
                                                    onClick={() => handleDeleteClick(grade.idOcene)}
                                                    color="secondary"
                                                >
                                                    <DeleteIcon />
                                                </IconButton>
                                            </>
                                      
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Ucitavanje...</p>
            )}

            <Dialog
                open={editDialogOpen}
                onClose={() => setEditDialogOpen(false)}
            >
                <DialogTitle>Ažuriraj Ocenu</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        name="ocena"
                        label="Ocena"
                        type="number"
                        fullWidth
                        value={formValues.ocena}
                        onChange={handleFormChange}
                    />
                    <TextField
                        margin="dense"
                        name="prvoPolugodiste"
                        label="Prvo Polugodiste"
                        type="number"
                        fullWidth
                        value={formValues.prvoPolugodiste}
                        onChange={handleFormChange}
                    />
                    <TextField
                        margin="dense"
                        name="drugoPolugodiste"
                        label="Drugo Polugodiste"
                        type="number"
                        fullWidth
                        value={formValues.drugoPolugodiste}
                        onChange={handleFormChange}
                    />
                    <TextField
                        margin="dense"
                        name="pismeni"
                        label="Pismeni Ispit"
                        type="number"
                        fullWidth
                        value={formValues.pismeni}
                        onChange={handleFormChange}
                    />
                    <TextField
                        margin="dense"
                        name="usmeni"
                        label="Usmeni Ispit"
                        type="number"
                        fullWidth
                        value={formValues.usmeni}
                        onChange={handleFormChange}
                    />
                    <TextField
                        margin="dense"
                        name="zakljucnaOcena"
                        label="Zaključna Ocena"
                        type="number"
                        fullWidth
                        value={formValues.zakljucnaOcena}
                        onChange={handleFormChange}
                    />
                    <TextField
                        margin="dense"
                        name="vladanje"
                        label="Vladanje"
                        type="number"
                        fullWidth
                        value={formValues.vladanje}
                        onChange={handleFormChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setEditDialogOpen(false)}>Otkazi</Button>
                    <Button onClick={handleUpdate} color="primary">Azuriraj</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default GradesFetcher;




























