import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onEdit, onDelete }) => {
    const [filter, setFilter] = useState('All');

    const filteredTodos = todos.filter(todo => 
        filter === 'All' || todo.status === filter
    );

    return (
        <div>
            <h2>My Todos</h2>
            <div className="filter-section">
                <label>Status Filter: </label>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Completed">Completed</option>
                    <option value="Not Completed">Not Completed</option>
                </select>
            </div>
            <div className="todo-list">
                {filteredTodos.map(todo => (
                    <TodoItem 
                        key={todo.name} 
                        todo={todo} 
                        onEdit={onEdit} 
                        onDelete={onDelete} 
                    />
                ))}
            </div>
        </div>
    );
};

export default TodoList;
