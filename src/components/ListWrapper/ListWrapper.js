import React from 'react';
import styled from 'styled-components';
import ListItem from "./ListItem";
import {weatherData} from '../../data/weatherData';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ListWrapper = () => (
   <Wrapper>
           {weatherData.map(item => (
               <ListItem key={item.day} {...item} />
           ))}
   </Wrapper>
);

export default ListWrapper;