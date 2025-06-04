import { test, expect, request } from '@playwright/test';
import { OpenWeatherAPI } from '../apiPage/weatherPage';

test('Use Openweather - current temperature for Islamabad', async () => {

  const apiContext = await request.newContext();
  const weather = new OpenWeatherAPI(apiContext);
  
  const response = await weather.getTemp('Islamabad');
  const data = await response.json();

  // Assert location and status code
  expect(response.status()).toBe(200);  
  expect(data.name).toBe('Islamabad');

  const tempKelvin = data.main.temp;
  const tempCelsius = (tempKelvin - 273.15).toFixed(2);

  console.log(`Temperature in Islamabad: ${tempCelsius}°C`);
  
});
