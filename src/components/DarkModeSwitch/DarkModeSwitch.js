import React, { useContext } from 'react';
import { DarkModeContext } from "../../hooks/DarkModeContext";
import './index.css';

export default  () => {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

    return (
        // <button onClick={toggleDarkMode}>
        //     click for {darkMode ? "light mode" : "dark mode"}
        // </button>
        <label className="toggle">
            <input type="checkbox" onClick={toggleDarkMode}/>
            <span></span>
        </label>
    )
}