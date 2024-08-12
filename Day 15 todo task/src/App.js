import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';
const App = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const editTodo = (name, updatedTodo) => {
        setTodos(todos.map(todo => 
            todo.name === name ? updatedTodo : todo
        ));
    };

    const deleteTodo = (name) => {
        setTodos(todos.filter(todo => todo.name !== name));
    };

    return (
        <div className="app">
            <h1>My Todo</h1>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} onEdit={editTodo} onDelete={deleteTodo} />
        </div>
    );
};

export default App;
