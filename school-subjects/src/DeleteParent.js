import React from 'react';

const DeleteParent = ({ parentId, onDelete }) => {
    const username = 'admin';
    const password = 'admin14993';
    const encodedCredentials = btoa(`${username}:${password}`);

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this parent?')) {
            try {
                const response = await fetch(`http://localhost:8080/parent/delete/${parentId}`, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': `Basic ${encodedCredentials}`,
                    }
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                onDelete(parentId);
            } catch (error) {
                console.error('Error deleting parent:', error);
            }
        }
    };

    return (
        <button onClick={handleDelete} style={{ color: 'red' }}>
            Delete
        </button>
    );
};

export default DeleteParent;