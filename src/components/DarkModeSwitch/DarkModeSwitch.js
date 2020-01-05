import React, { useContext } from 'react';
import { DarkModeContext } from "../../hooks/DarkModeContext";

export default  () => {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

    return (
        <button onClick={toggleDarkMode}>
            click for {darkMode ? "light mode" : "dark mode"}
        </button>
    )
}