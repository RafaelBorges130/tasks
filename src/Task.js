import React from 'react';

const Task = ({ title, completed }) => (
    <div className={completed ? 'completa' : ''}>
        {title}
        {completed && <span> ✔️</span>}
    </div>
);

export default Task;
