import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeChange = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme} className="btn btn-toggle-theme">
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
    );
};

export default ThemeChange;