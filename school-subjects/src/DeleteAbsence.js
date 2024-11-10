import React from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const DeleteAbsence = ({ absenceId, onDelete }) => {
    const username = 'admin';
    const password = 'admin14993';
    const encodedCredentials = btoa(`${username}:${password}`);

    const handleDelete = async () => {
        if (window.confirm('Da li ste sigurni da zelite da obrisete ovaj izostanak?')) {
            try {
                const response = await fetch(`http://localhost:8080/absence/delete/${absenceId}`, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': `Basic ${encodedCredentials}`,
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`Failed to delete: ${errorText}`);
                }
                onDelete(absenceId);
            } catch (error) {
                console.error('Error deleting absence:', error);
            }
        }
    };

    return (
        <IconButton color="secondary" onClick={handleDelete}>
            <DeleteIcon />
        </IconButton>
    );
};

export default DeleteAbsence;