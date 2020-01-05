import cloud from '../assets/Cloud.png';
import cloudMoon from '../assets/Cloud&Moon.png';
import cloudRain from '../assets/Cloud&Rain.png';
import cloudSun from '../assets/Cloud&Sun.png';
import cloudSunRain from '../assets/Cloud&Sun&Rain.png';
import moon from '../assets/Moon.png';
import sun from '../assets/Sun.png';

export const weatherData = [
    {
        day: 'mon',
        weather: sun,
        tempDay: '21',
        tempNight: '11'
    },
    {
        day: 'tue',
        weather: moon,
        tempDay: '10',
        tempNight: '0'
    },
    {
        day: 'wed',
        weather: cloudSunRain,
        tempDay: '8',
        tempNight: '-2'
    },
    {
        day: 'thu',
        weather: cloudSun,
        tempDay: '9',
        tempNight: '2'
    },
    {
        day: 'fri',
        weather: cloudRain,
        tempDay: '12',
        tempNight: '7'
    },
    {
        day: 'sat',
        weather: cloudMoon,
        tempDay: '4',
        tempNight: '-3'
    },
    {
        day: 'sun',
        weather: cloud,
        tempDay: '6',
        tempNight: '2'
    },
];
