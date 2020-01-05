import React, { useContext } from 'react';
import styled from 'styled-components';
import { DarkModeContext } from "../../hooks/DarkModeContext";

const Toggle = styled.label`
    width: 50px;
    height: 25px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    margin: 3px 3px -5px;
    
    span {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background-color: #eaeaea;
      border-radius: 20px;
      -webkit-box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.25);
      box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.25);
      -webkit-transition: background-color 300ms ease;
       transition: background-color 300ms ease;
       
       &::before {
        position: absolute;
        content: ' ';
        width: 15px;
        height: 15px;
        background-color: #a4a4a4;
        border-radius: 50%;
        left: 5px;
        top: 5px;
        -webkit-transition: left 300ms ease;
        transition: left 300ms ease;      
       }
       
       input {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        visibility: hidden;
        
        &:checked + span {
          background-color: #2d81ff;
          
          &::before {
              left: 30px;
              background-color: #fff;
            }
          }
       }
    }
`;

export default  () => {
    const { toggleDarkMode } = useContext(DarkModeContext);

    return (
        <Toggle>
            <input type="checkbox" onClick={toggleDarkMode}/>
            <span />
        </Toggle>
    )
}