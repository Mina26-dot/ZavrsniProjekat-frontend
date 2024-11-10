import React from 'react';

const DeleteClass = ({ classId, onDelete }) => {
    const username = 'admin';
    const password = 'admin14993';
    const encodedCredentials = btoa(`${username}:${password}`);

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this class?')) {
            try {
                const response = await fetch(`http://localhost:8080/class/${classId}`, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': `Basic ${encodedCredentials}`,
                    }
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                onDelete(classId);
            } catch (error) {
                console.error('Error deleting class:', error);
            }
        }
    };

    return (
        <button onClick={handleDelete} style={{ color: 'red' }}>
            Delete
        </button>
    );
};

export default DeleteClass;