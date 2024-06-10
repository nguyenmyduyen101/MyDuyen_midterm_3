import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/layout/Home';
import Navbar from "./components/layout/Navbar";
import { ThemeProvider } from './context/ThemeContext';
import './App.css'

const App = () => (
    <ThemeProvider>
        <Router>
        <Navbar/>
            <Home />
        </Router>
    </ThemeProvider>
);

export default App;