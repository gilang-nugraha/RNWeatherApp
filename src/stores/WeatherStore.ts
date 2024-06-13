import {useQuery} from '@tanstack/react-query';
import {getCurrentWeather} from '../services/WeatherServices';

export const useGetWeather = () =>
  useQuery({
    queryKey: ['weather'],
    queryFn: getCurrentWeather,
  });
