import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ListItem from "./ListItem";

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

const weekdays = ['mon','tue','wed','thu','fri','sat','sun']

class ListWrapper extends React.Component {
   state = {
      weatherData: []
   };

   componentDidMount() { 
      axios.get('https://api.openweathermap.org/data/2.5/forecast?q=London&units=metric&appid=' + API_KEY)
         .then(res => {
            const days = {};
            for (let hourData of res.data.list) {
               const date = new Date(hourData.dt*1000); // times 1000 because we need to convert from a Unix timestamp to time in JavaScript

               const hour = date.getHours();
               const day = date.getDate();
               const name = weekdays[date.getDay()];

               if (!days[day]) days[day] = {name, len: 0}
               days[day][hour] = {
                  temp: Math.floor(100*(hourData.main.temp_min+hourData.main.temp_max)/2)/100,
                  weather: `http://openweathermap.org/img/wn/${hourData.weather[0].icon}@2x.png`
               }
               days[day].len++;
            }

            const list = [];
            const hours = [1,4,7,10,13,16,19,22];
            for (let day in days) {
               const obj = {day: days[day].name}
               const nextDay = days[parseInt(day)+1]
               if (nextDay && nextDay[1]) {
                  obj.tempNight = nextDay[1].temp
               } 
               if (days[day][16]) {
                  obj.tempDay = days[day][16].temp
                  obj.weather = days[day][16].weather
               } else {
                  // if 16 is not avaible then loop for all the hours and pick one...
                  for (let hour of hours) {
                     const data = days[day][hour];
                     if (data) {
                        obj.weather = days[day][hour].weather
                        break
                     }
                  }
               }
               
               list.push(obj)
            }
            
            this.setState({weatherData: list});
         });
   };

   render() {
      const { weatherData } = this.state;
      return (
         <Wrapper>
            {weatherData.map(item => (
               <ListItem key={item.day} {...item} />
            ))}
         </Wrapper>
      )
   }
}

export default ListWrapper;