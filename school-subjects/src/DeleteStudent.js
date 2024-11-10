import React from 'react';

const DeleteStudent = ({ studentId, onDelete }) => {
    const username = 'admin';
    const password = 'admin14993';
    const encodedCredentials = btoa(`${username}:${password}`);

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this student?')) {
            try {
                const response = await fetch(`http://localhost:8080/student/delete/${studentId}`, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': `Basic ${encodedCredentials}`,
                    }
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                onDelete(studentId);
            } catch (error) {
                console.error('Error deleting student:', error);
            }
        }
    };

    return (
        <button onClick={handleDelete} style={{ color: 'red' }}>
            Delete
        </button>
    );
};

export default DeleteStudent;