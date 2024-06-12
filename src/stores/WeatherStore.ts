import {useQuery} from '@tanstack/react-query';
import {fetchWeather} from '../services/WeatherServices';

export const useGetWeather = () =>
  useQuery({
    queryKey: ['weather'],
    queryFn: fetchWeather,
  });
