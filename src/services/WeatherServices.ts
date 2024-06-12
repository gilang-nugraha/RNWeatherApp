import {API_KEY} from '@env';

import {
  getWeather,
  dailyForecast,
  showWeather,
  getLocation,
} from 'react-native-weather-api';

export async function fetchWeather() {
  console.log('fetchWeather', API_KEY);

  const location = await getLocation();
  const weather = await getWeather({
    key: API_KEY,
    lat: location.coords.latitude,
    lon: location.coords.longitude,
    unit: 'metric',
  }).then(() => {
    const data = new showWeather();
    return data;
  });
  return weather;
}
