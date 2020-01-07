import React from 'react';
import axios from 'axios';
import Constants from "../../utils/Constants";
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

class ListWrapper extends React.Component {
    state = {
        day: undefined,
        tempDay: undefined,
        tempNight: undefined,
        weatherIcon: undefined
    };

    getWeather = async () => {
        const api_call = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=25e7705fa2fad9ccac48355862164f63');

        const response = await api_call.json();
        console.log(response);

        const date = new Date(response.dt*1000);
        const day = Constants.WEEKDAYS[date.getDay() - 1];
        const tempDay = Math.round(response.main.temp_max);
        const tempNight = Math.round(response.main.temp_min);
        const weatherIcon = `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`;

        this.setState({
            day: day,
            tempDay: tempDay,
            tempNight: tempNight,
            weatherIcon: weatherIcon
        });
        console.log(this.state);
    };

    componentDidMount() {
        this.getWeather();
    }

    render() {
        return (
            <Wrapper>
                <ListItem day={this.state.day} tempDay={this.state.tempDay} tempNight={this.state.tempNight} weatherIcon={this.state.weatherIcon} />
            </Wrapper>
        )
    }
}

export default ListWrapper;