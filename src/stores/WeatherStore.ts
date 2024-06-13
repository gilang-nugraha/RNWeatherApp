import {useQuery} from '@tanstack/react-query';
import {getCurrentWeather, getForecast} from '../services/WeatherServices';

export const useGetWeather = () =>
  useQuery({
    queryKey: ['weather'],
    queryFn: getCurrentWeather,
  });

export const useGetForecast = () =>
  useQuery({
    queryKey: ['forecast'],
    queryFn: getForecast,
  });
