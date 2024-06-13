export type WeatherType = {
  id: number;
  name: string;
  cod: number;
  coord: CoordWeather;
  weather: Weather[];
  base: string;
  main: BaseWeather;
  visibility: number;
  wind: Wind;
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
};

export type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type BaseWeather = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
};

export type CoordWeather = {
  lon: number;
  lat: number;
};

export type Wind = {
  speed: number;
  deg: number;
};
