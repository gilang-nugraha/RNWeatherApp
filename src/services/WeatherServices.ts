import Geolocation from '@react-native-community/geolocation';
import {LocationType} from '../../types/LocationType';
// import {axiosInstance} from '../utils/axios-instance';
import {WeatherType} from '../../types/WeatherType';
import {ForecastType} from '../../types/ForecastType';

export async function getLocation() {
  return new Promise<LocationType>((resolve, reject) => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        resolve({latitude, longitude});
      },
      error => {
        reject(error);
      },
    );
  });
}

export async function getCurrentWeather() {
  // const location = await getLocation();
  // const params = {
  //   lat: location.latitude,
  //   lon: location.longitude,
  //   units: 'metric',
  //   // lang: 'id',
  // };
  // const weather = await axiosInstance
  //   .get('/weather', {
  //     params,
  //   })
  //   .then(res => {
  //     return res.data;
  //   })
  //   .catch(error => {
  //     console.log(error);
  //     return error;
  //   });
  // return weather;

  const data: WeatherType = {
    coord: {lon: 112.724, lat: -7.2826},
    weather: [{id: 721, main: 'Haze', description: 'haze', icon: '50n'}],
    base: 'stations',
    main: {
      temp: 24.89,
      feels_like: 26.05,
      temp_min: 24.89,
      temp_max: 24.89,
      pressure: 1011,
      humidity: 100,
    },
    visibility: 5000,
    wind: {speed: 2.06, deg: 240},
    clouds: {all: 20},
    dt: 1718229314,
    sys: {
      type: 1,
      id: 9363,
      country: 'ID',
      sunrise: 1718231890,
      sunset: 1718274019,
    },
    timezone: 25200,
    id: 1985528,
    name: 'Gubengairlangga',
    cod: 200,
  };

  return data;
}

export async function getForecast() {
  // const location = await getLocation();
  // const params = {
  //   lat: location.latitude,
  //   lon: location.longitude,
  //   units: 'metric',
  //   cnt: 32 // 4 days, today + 3 days after
  //   // lang: 'id',
  // };
  // const forecast = await axiosInstance
  //   .get('/forecast', {
  //     params,
  //   })
  //   .then(res => {
  //     return res.data;
  //   })
  //   .catch(error => {
  //     console.log(error);
  //     return error;
  //   });
  // return forecast;

  const data: ForecastType = {
    cod: '200',
    message: 0,
    cnt: 32,
    list: [
      {
        dt: 1718236800,
        main: {
          temp: 24.96,
          feels_like: 26.02,
          temp_min: 24.96,
          temp_max: 25.09,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 1010,
          humidity: 96,
          temp_kf: -0.13,
        },
        weather: [
          {
            id: 802,
            main: 'Clouds',
            description: 'scattered clouds',
            icon: '03d',
          },
        ],
        clouds: {
          all: 47,
        },
        wind: {
          speed: 1.29,
          deg: 287,
          gust: 1.72,
        },
        visibility: 10000,
        pop: 0.48,
        sys: {
          pod: 'd',
        },
        dt_txt: '2024-06-13 00:00:00',
      },
      {
        dt: 1718247600,
        main: {
          temp: 25.84,
          feels_like: 26.75,
          temp_min: 25.84,
          temp_max: 26.32,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 1010,
          humidity: 87,
          temp_kf: -0.48,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 71,
        },
        wind: {
          speed: 1.32,
          deg: 298,
          gust: 1.71,
        },
        visibility: 10000,
        pop: 0.01,
        sys: {
          pod: 'd',
        },
        dt_txt: '2024-06-13 03:00:00',
      },
      {
        dt: 1718258400,
        main: {
          temp: 30.42,
          feels_like: 34.33,
          temp_min: 30.42,
          temp_max: 30.42,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 1007,
          humidity: 63,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10d',
          },
        ],
        clouds: {
          all: 90,
        },
        wind: {
          speed: 2.06,
          deg: 325,
          gust: 2.04,
        },
        visibility: 10000,
        pop: 0.38,
        rain: {
          '3h': 0.15,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2024-06-13 06:00:00',
      },
      {
        dt: 1718269200,
        main: {
          temp: 29.59,
          feels_like: 33.42,
          temp_min: 29.59,
          temp_max: 29.59,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 1007,
          humidity: 67,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10d',
          },
        ],
        clouds: {
          all: 71,
        },
        wind: {
          speed: 3.61,
          deg: 357,
          gust: 3.59,
        },
        visibility: 10000,
        pop: 0.96,
        rain: {
          '3h': 1.45,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2024-06-13 09:00:00',
      },
      {
        dt: 1718280000,
        main: {
          temp: 25.94,
          feels_like: 26.84,
          temp_min: 25.94,
          temp_max: 25.94,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 1010,
          humidity: 86,
          temp_kf: 0,
        },
        weather: [
          {
            id: 501,
            main: 'Rain',
            description: 'moderate rain',
            icon: '10n',
          },
        ],
        clouds: {
          all: 82,
        },
        wind: {
          speed: 1.72,
          deg: 8,
          gust: 3.35,
        },
        visibility: 8880,
        pop: 1,
        rain: {
          '3h': 4.49,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2024-06-13 12:00:00',
      },
      {
        dt: 1718290800,
        main: {
          temp: 25.85,
          feels_like: 26.74,
          temp_min: 25.85,
          temp_max: 25.85,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 1010,
          humidity: 86,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10n',
          },
        ],
        clouds: {
          all: 89,
        },
        wind: {
          speed: 0.34,
          deg: 36,
          gust: 0.7,
        },
        visibility: 10000,
        pop: 0.99,
        rain: {
          '3h': 1.89,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2024-06-13 15:00:00',
      },
      {
        dt: 1718301600,
        main: {
          temp: 25.41,
          feels_like: 26.25,
          temp_min: 25.41,
          temp_max: 25.41,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 1009,
          humidity: 86,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10n',
          },
        ],
        clouds: {
          all: 92,
        },
        wind: {
          speed: 0.7,
          deg: 112,
          gust: 0.92,
        },
        visibility: 10000,
        pop: 0.98,
        rain: {
          '3h': 1.09,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2024-06-13 18:00:00',
      },
      {
        dt: 1718312400,
        main: {
          temp: 24.91,
          feels_like: 25.75,
          temp_min: 24.91,
          temp_max: 24.91,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 1008,
          humidity: 88,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 96,
        },
        wind: {
          speed: 0.71,
          deg: 62,
          gust: 0.99,
        },
        visibility: 10000,
        pop: 0.18,
        sys: {
          pod: 'n',
        },
        dt_txt: '2024-06-13 21:00:00',
      },
      {
        dt: 1718323200,
        main: {
          temp: 26.11,
          feels_like: 26.11,
          temp_min: 26.11,
          temp_max: 26.11,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 1009,
          humidity: 83,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 98,
        },
        wind: {
          speed: 1.04,
          deg: 114,
          gust: 1.66,
        },
        visibility: 10000,
        pop: 0.18,
        sys: {
          pod: 'd',
        },
        dt_txt: '2024-06-14 00:00:00',
      },
      {
        dt: 1718334000,
        main: {
          temp: 29.34,
          feels_like: 32.89,
          temp_min: 29.34,
          temp_max: 29.34,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 1008,
          humidity: 67,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 2.83,
          deg: 95,
          gust: 2.82,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: '2024-06-14 03:00:00',
      },
      {
        dt: 1718344800,
        main: {
          temp: 29.53,
          feels_like: 32.89,
          temp_min: 29.53,
          temp_max: 29.53,
          pressure: 1008,
          sea_level: 1008,
          grnd_level: 1006,
          humidity: 65,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 2.68,
          deg: 95,
          gust: 1.85,
        },
        visibility: 10000,
        pop: 0.1,
        sys: {
          pod: 'd',
        },
        dt_txt: '2024-06-14 06:00:00',
      },
      {
        dt: 1718355600,
        main: {
          temp: 29.24,
          feels_like: 32.49,
          temp_min: 29.24,
          temp_max: 29.24,
          pressure: 1008,
          sea_level: 1008,
          grnd_level: 1006,
          humidity: 66,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10d',
          },
        ],
        clouds: {
          all: 62,
        },
        wind: {
          speed: 1.94,
          deg: 61,
          gust: 2.2,
        },
        visibility: 10000,
        pop: 0.67,
        rain: {
          '3h': 0.4,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2024-06-14 09:00:00',
      },
      {
        dt: 1718366400,
        main: {
          temp: 26.63,
          feels_like: 26.63,
          temp_min: 26.63,
          temp_max: 26.63,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 1008,
          humidity: 81,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10n',
          },
        ],
        clouds: {
          all: 42,
        },
        wind: {
          speed: 2.08,
          deg: 78,
          gust: 3.33,
        },
        visibility: 10000,
        pop: 0.92,
        rain: {
          '3h': 1.53,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2024-06-14 12:00:00',
      },
      {
        dt: 1718377200,
        main: {
          temp: 26.18,
          feels_like: 26.18,
          temp_min: 26.18,
          temp_max: 26.18,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 1009,
          humidity: 84,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10n',
          },
        ],
        clouds: {
          all: 22,
        },
        wind: {
          speed: 1.73,
          deg: 102,
          gust: 2.67,
        },
        visibility: 10000,
        pop: 0.78,
        rain: {
          '3h': 0.16,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2024-06-14 15:00:00',
      },
      {
        dt: 1718388000,
        main: {
          temp: 25.87,
          feels_like: 26.73,
          temp_min: 25.87,
          temp_max: 25.87,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 1008,
          humidity: 85,
          temp_kf: 0,
        },
        weather: [
          {
            id: 801,
            main: 'Clouds',
            description: 'few clouds',
            icon: '02n',
          },
        ],
        clouds: {
          all: 22,
        },
        wind: {
          speed: 1.48,
          deg: 116,
          gust: 2.04,
        },
        visibility: 10000,
        pop: 0.73,
        sys: {
          pod: 'n',
        },
        dt_txt: '2024-06-14 18:00:00',
      },
      {
        dt: 1718398800,
        main: {
          temp: 25.51,
          feels_like: 26.36,
          temp_min: 25.51,
          temp_max: 25.51,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 1007,
          humidity: 86,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 93,
        },
        wind: {
          speed: 1.14,
          deg: 115,
          gust: 1.62,
        },
        visibility: 10000,
        pop: 0.25,
        sys: {
          pod: 'n',
        },
        dt_txt: '2024-06-14 21:00:00',
      },
      {
        dt: 1718409600,
        main: {
          temp: 26.11,
          feels_like: 26.11,
          temp_min: 26.11,
          temp_max: 26.11,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 1009,
          humidity: 86,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10d',
          },
        ],
        clouds: {
          all: 94,
        },
        wind: {
          speed: 0.51,
          deg: 163,
          gust: 1.17,
        },
        visibility: 10000,
        pop: 0.52,
        rain: {
          '3h': 2.47,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2024-06-15 00:00:00',
      },
      {
        dt: 1718420400,
        main: {
          temp: 29.76,
          feels_like: 34.01,
          temp_min: 29.76,
          temp_max: 29.76,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 1008,
          humidity: 68,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10d',
          },
        ],
        clouds: {
          all: 89,
        },
        wind: {
          speed: 0.91,
          deg: 80,
          gust: 1.03,
        },
        visibility: 10000,
        pop: 0.53,
        rain: {
          '3h': 0.28,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2024-06-15 03:00:00',
      },
      {
        dt: 1718431200,
        main: {
          temp: 30.12,
          feels_like: 34.37,
          temp_min: 30.12,
          temp_max: 30.12,
          pressure: 1008,
          sea_level: 1008,
          grnd_level: 1006,
          humidity: 66,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10d',
          },
        ],
        clouds: {
          all: 79,
        },
        wind: {
          speed: 1.79,
          deg: 32,
          gust: 1.53,
        },
        visibility: 10000,
        pop: 0.91,
        rain: {
          '3h': 1.39,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2024-06-15 06:00:00',
      },
      {
        dt: 1718442000,
        main: {
          temp: 28.7,
          feels_like: 32.6,
          temp_min: 28.7,
          temp_max: 28.7,
          pressure: 1007,
          sea_level: 1007,
          grnd_level: 1005,
          humidity: 73,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10d',
          },
        ],
        clouds: {
          all: 30,
        },
        wind: {
          speed: 1.96,
          deg: 102,
          gust: 2.21,
        },
        visibility: 10000,
        pop: 0.99,
        rain: {
          '3h': 2.45,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2024-06-15 09:00:00',
      },
      {
        dt: 1718452800,
        main: {
          temp: 26.44,
          feels_like: 26.44,
          temp_min: 26.44,
          temp_max: 26.44,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 1007,
          humidity: 83,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10n',
          },
        ],
        clouds: {
          all: 20,
        },
        wind: {
          speed: 2.65,
          deg: 116,
          gust: 4.3,
        },
        visibility: 10000,
        pop: 0.99,
        rain: {
          '3h': 2.59,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2024-06-15 12:00:00',
      },
      {
        dt: 1718463600,
        main: {
          temp: 25.72,
          feels_like: 26.57,
          temp_min: 25.72,
          temp_max: 25.72,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 1009,
          humidity: 85,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10n',
          },
        ],
        clouds: {
          all: 5,
        },
        wind: {
          speed: 2.95,
          deg: 110,
          gust: 5.46,
        },
        visibility: 10000,
        pop: 0.4,
        rain: {
          '3h': 0.22,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2024-06-15 15:00:00',
      },
      {
        dt: 1718474400,
        main: {
          temp: 25.21,
          feels_like: 26.01,
          temp_min: 25.21,
          temp_max: 25.21,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 1008,
          humidity: 85,
          temp_kf: 0,
        },
        weather: [
          {
            id: 801,
            main: 'Clouds',
            description: 'few clouds',
            icon: '02n',
          },
        ],
        clouds: {
          all: 19,
        },
        wind: {
          speed: 0.95,
          deg: 113,
          gust: 3.06,
        },
        visibility: 10000,
        pop: 0.37,
        sys: {
          pod: 'n',
        },
        dt_txt: '2024-06-15 18:00:00',
      },
      {
        dt: 1718485200,
        main: {
          temp: 24.32,
          feels_like: 25.11,
          temp_min: 24.32,
          temp_max: 24.32,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 1008,
          humidity: 88,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 74,
        },
        wind: {
          speed: 1.08,
          deg: 245,
          gust: 1.73,
        },
        visibility: 10000,
        pop: 0.1,
        sys: {
          pod: 'n',
        },
        dt_txt: '2024-06-15 21:00:00',
      },
      {
        dt: 1718496000,
        main: {
          temp: 25.07,
          feels_like: 25.85,
          temp_min: 25.07,
          temp_max: 25.07,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 1010,
          humidity: 85,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 55,
        },
        wind: {
          speed: 1.55,
          deg: 217,
          gust: 1.79,
        },
        visibility: 10000,
        pop: 0.1,
        sys: {
          pod: 'd',
        },
        dt_txt: '2024-06-16 00:00:00',
      },
      {
        dt: 1718506800,
        main: {
          temp: 29.31,
          feels_like: 32.27,
          temp_min: 29.31,
          temp_max: 29.31,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 1010,
          humidity: 64,
          temp_kf: 0,
        },
        weather: [
          {
            id: 801,
            main: 'Clouds',
            description: 'few clouds',
            icon: '02d',
          },
        ],
        clouds: {
          all: 20,
        },
        wind: {
          speed: 1.54,
          deg: 132,
          gust: 1.84,
        },
        visibility: 10000,
        pop: 0.03,
        sys: {
          pod: 'd',
        },
        dt_txt: '2024-06-16 03:00:00',
      },
      {
        dt: 1718517600,
        main: {
          temp: 30.29,
          feels_like: 32.58,
          temp_min: 30.29,
          temp_max: 30.29,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 1007,
          humidity: 56,
          temp_kf: 0,
        },
        weather: [
          {
            id: 801,
            main: 'Clouds',
            description: 'few clouds',
            icon: '02d',
          },
        ],
        clouds: {
          all: 20,
        },
        wind: {
          speed: 3.01,
          deg: 101,
          gust: 2.71,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: '2024-06-16 06:00:00',
      },
      {
        dt: 1718528400,
        main: {
          temp: 29.34,
          feels_like: 31.79,
          temp_min: 29.34,
          temp_max: 29.34,
          pressure: 1008,
          sea_level: 1008,
          grnd_level: 1006,
          humidity: 61,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d',
          },
        ],
        clouds: {
          all: 10,
        },
        wind: {
          speed: 3.14,
          deg: 100,
          gust: 3.73,
        },
        visibility: 10000,
        pop: 0.08,
        sys: {
          pod: 'd',
        },
        dt_txt: '2024-06-16 09:00:00',
      },
      {
        dt: 1718539200,
        main: {
          temp: 27.32,
          feels_like: 29.51,
          temp_min: 27.32,
          temp_max: 27.32,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 1009,
          humidity: 71,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01n',
          },
        ],
        clouds: {
          all: 8,
        },
        wind: {
          speed: 3.57,
          deg: 104,
          gust: 5.85,
        },
        visibility: 10000,
        pop: 0.11,
        sys: {
          pod: 'n',
        },
        dt_txt: '2024-06-16 12:00:00',
      },
      {
        dt: 1718550000,
        main: {
          temp: 26.21,
          feels_like: 26.21,
          temp_min: 26.21,
          temp_max: 26.21,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 1010,
          humidity: 77,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 71,
        },
        wind: {
          speed: 3.45,
          deg: 117,
          gust: 5.73,
        },
        visibility: 10000,
        pop: 0.07,
        sys: {
          pod: 'n',
        },
        dt_txt: '2024-06-16 15:00:00',
      },
      {
        dt: 1718560800,
        main: {
          temp: 25.48,
          feels_like: 26.17,
          temp_min: 25.48,
          temp_max: 25.48,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 1009,
          humidity: 80,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 82,
        },
        wind: {
          speed: 2.38,
          deg: 132,
          gust: 4.5,
        },
        visibility: 10000,
        pop: 0.03,
        sys: {
          pod: 'n',
        },
        dt_txt: '2024-06-16 18:00:00',
      },
      {
        dt: 1718571600,
        main: {
          temp: 24.54,
          feels_like: 25.19,
          temp_min: 24.54,
          temp_max: 24.54,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 1009,
          humidity: 82,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 91,
        },
        wind: {
          speed: 1.05,
          deg: 214,
          gust: 1.6,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: '2024-06-16 21:00:00',
      },
    ],
    city: {
      id: 1985528,
      name: 'Gubengairlangga',
      coord: {
        lat: -7.2826,
        lon: 112.724,
      },
      country: 'ID',
      population: 1000,
      timezone: 25200,
      sunrise: 1718231890,
      sunset: 1718274019,
    },
  };
  return data;
}
