// config.ts
import dotenv from 'dotenv';
dotenv.config();

export const weatherConfig = {
    baseURL: 'https://api.openweathermap.org/data/2.5',
    apiKey: process.env.OPEN_WEATHER_KEY ?? '73703b5d8e4c038edd0685d8b81fe840', 
};
