import React from 'react';

const DeleteGrade = ({ gradeId, onDelete }) => {
    const username = 'admin';
    const password = 'admin14993';
    const encodedCredentials = btoa(`${username}:${password}`);

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this grade?')) {
            try {
                const response = await fetch(`http://localhost:8080/grades/${gradeId}`, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': `Basic ${encodedCredentials}`,
                        'Content-Type': 'application/json'
                    }
                });

                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`Network response was not ok: ${errorText}`);
                }

                onDelete(gradeId); 
            } catch (error) {
                console.error('Error deleting grade:', error);
            }
        }
    };

    return (
        <button onClick={handleDelete} style={{ color: 'red' }}>
            Delete
        </button>
    );
};

export default DeleteGrade;