import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ListItem from "./ListItem";
import { weatherData } from '../../data/weatherData';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  
  @media (max-width: 500px) {
    flex-direction: column;
    margin-bottom: 50px;
  }
`;

// const ListWrapper = () => (
//    <Wrapper>
//       {weatherData.map(item => (
//           <ListItem key={item.day} {...item} />
//       ))}
//    </Wrapper>
// );

const API_KEY = '25e7705fa2fad9ccac48355862164f63';

class ListWrapper extends React.Component {
   state = {
      weatherData: {}
   };

   componentDidMount() {
      axios.get('https://api.openweathermap.org/data/2.5/forecast?q=London&units=metric&appid=' + API_KEY)
          .then(data => {
             this.setState({weatherData: data});
             console.log(data);
             console.log(this.state.weatherData);
          });
   };

   render() {
      return (
          <Wrapper>
             {/*{weatherData.map(item => (*/}
             {/*    <ListItem key={item.day} {...item} />*/}
             {/*))}*/}
          </Wrapper>
      )
   }
}

export default ListWrapper;