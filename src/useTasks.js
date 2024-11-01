import { useState } from 'react';

const useTasks = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (newTask) => {
        setTasks([...tasks, { id: tasks.length + 1, ...newTask }]);
    };

    return { tasks, addTask };
};

export default useTasks;
