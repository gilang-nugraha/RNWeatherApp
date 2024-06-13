import {ForecastType} from '../../types/ForecastType';
import {WeatherType} from '../../types/WeatherType';
import {axiosInstance} from '../utils/axios-instance';

export async function getCurrentWeather() {
  const weather: WeatherType = await axiosInstance
    .get('/weather')
    .then(res => {
      return res.data;
    })
    .catch(error => {
      console.log(error);
      return error;
    });

  const forecast: ForecastType = await axiosInstance
    .get('/forecast')
    .then(res => {
      return res.data;
    })
    .catch(error => {
      console.log(error);
      return error;
    });

  return {weather, forecast};
}
