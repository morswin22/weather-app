import React, { useContext } from 'react';
import styled from 'styled-components';
import { DarkModeContext } from "../../hooks/DarkModeContext";

const Button = styled.button`
   border:none;
   width: 15px;
   height: 15px;
   font-size: 6rem;
   cursor: pointer;
   position: absolute;
   right: 75px;
   top: 25px;   
   
   background-color: transparent;
   
   &:focus {}
    outline: none;
`;


export default  () => {
    const {darkMode,  toggleDarkMode } = useContext(DarkModeContext);

    console.log(darkMode);

    return (
        <Button onClick={toggleDarkMode}>
            {darkMode ? "🌝" : "🌚"}
        </Button>
    )
};