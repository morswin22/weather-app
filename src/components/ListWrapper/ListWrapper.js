import React from 'react';
import styled from 'styled-components';
import ListItem from "./ListItem";
import {weatherData} from '../../data/weatherData';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  
  @media (max-width: 500px) {
    flex-direction: column;
    margin-bottom: 50px;
  }
`;

const ListWrapper = () => (
   <Wrapper>
           {weatherData.map(item => (
               <ListItem key={item.day} {...item} />
           ))}
   </Wrapper>
);

export default ListWrapper;