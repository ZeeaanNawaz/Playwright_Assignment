import { test, expect, request } from '@playwright/test';
import { openWeather } from './pages/weatherAPIPage';

test('Use Openweather', async ({ page }) => {

  const apiContext = await request.newContext();
  const weather = new openWeather(apiContext);
  
  const data = await weather.getTemp('Islamabad', 'pk', '73703b5d8e4c038edd0685d8b81fe840')

  // Extract and log the temperature
  const tempKelvin = data.main.temp;
  const tempCelsius = (tempKelvin - 273.15).toFixed(2);

  console.log(`🌡️ Temperature in Islamabad: ${tempCelsius}°C`);

  // Assert the location
  expect(data.name).toBe('Islamabad');
  
});
