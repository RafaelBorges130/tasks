import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TaskList from './TaskList';
import About from './About';
import './App.css';


const App = () => {
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">Sobre</Link>
            </nav>
            <div className='container'>
            <Routes>
                <Route path="/" element={<TaskList />} />
                <Route path="/about" element={<About />} />
            </Routes>
            </div>
        </Router>
    );
};

export default App;
