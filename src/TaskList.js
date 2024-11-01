import React, { useState, useEffect } from 'react';
import Task from './Task';
import useTasks from './useTasks';

const TaskList = () => {
    const { tasks, addTask } = useTasks();
    const [title, setTitle] = useState('');
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        console.log("lista pronta");
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask({ title, completed });
        setTitle('');
        setCompleted(false);
    };

    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Escreva a Tarefa"
                    required
                />
                <label>
                    <input
                        type="checkbox"
                        checked={completed}
                        onChange={(e) => setCompleted(e.target.checked)}
                    />
                    Completada
                </label>
                <button type="submit">Add Tarefa</button>
            </form>
            <ul className="task-list">
                {tasks.map((task) => (
                    <li key={task.id} className={task.completed ? 'completa' : ''}>
                        <Task title={task.title} completed={task.completed} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
