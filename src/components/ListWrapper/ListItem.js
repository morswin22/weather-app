import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 150px;
  height: 180px;
  font-size: 1.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Day = styled.p`
  text-transform: capitalize;
`;

const Icon = styled.div`
  margin: 20px 0;
  width: 80px;
  height: 80px;
  
  img {
    width: 100%;
    height: 100%;
  }
`;

const Temp = styled.p`
  color: ${({night}) => (night ? 'grey' : 'black')};

  &:not(:last-child) {
    margin-right: 8px;
  }
`;

const TempWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ListItem = ({day, weather, tempDay, tempNight}) => (
    <Wrapper>
        <Day>{day}</Day>
        <Icon>
            <img src={weather} alt={'weather'} />
        </Icon>
        <TempWrapper>
            <Temp>{tempDay}&#176;</Temp>
            <Temp night>{tempNight}&#176;</Temp>
        </TempWrapper>
    </Wrapper>
);

export default ListItem;