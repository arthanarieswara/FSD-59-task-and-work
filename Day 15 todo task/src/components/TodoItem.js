import React from 'react';

const TodoItem = ({ todo, onEdit, onDelete }) => {
    const handleStatusChange = (e) => {
        onEdit(todo.name, { ...todo, status: e.target.value });
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Name: {todo.name}</h5>
                <p className="card-text">Description: {todo.description}</p>
                <div className="form-group">
                    <label>Status: </label>
                    <select 
                        value={todo.status} 
                        onChange={handleStatusChange}
                        className="form-control"
                    >
                        <option value="Completed">Completed</option>
                        <option value="Not Completed">Not Completed</option>
                    </select>
                </div>
                <div className="button-group">
                    <button 
                        className="btn btn-success" 
                        onClick={() => onEdit(todo.name)}
                    >
                        Edit
                    </button>
                    <button 
                        className="btn btn-danger" 
                        onClick={() => onDelete(todo.name)}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TodoItem;
