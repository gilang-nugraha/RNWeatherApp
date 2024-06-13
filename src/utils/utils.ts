import {LocationType} from '../../types/LocationType';
import Geolocation from '@react-native-community/geolocation';

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

interface ConvertProps {
  unixTime: number;
  unixTimezone: number;
}

export function convertUnixToHours({
  unixTime,
  unixTimezone,
}: ConvertProps): string {
  const date = new Date((unixTime + unixTimezone) * 1000);
  const hours = String(date.getUTCHours()).padStart(2, '0');
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
}

export function convertUnixToDate({
  unixTime,
  unixTimezone,
}: ConvertProps): string {
  const date = new Date((unixTime + unixTimezone) * 1000);
  const day = String(date.getUTCDate()).padStart(2, '0');
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const year = date.getUTCFullYear();
  return `${day}/${month}/${year}`;
}

export function convertUnixToDateTime({
  unixTime,
  unixTimezone,
}: ConvertProps): string {
  const date = new Date((unixTime + unixTimezone) * 1000);
  const day = String(date.getUTCDate()).padStart(2, '0');
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const year = date.getUTCFullYear();
  const hours = String(date.getUTCHours()).padStart(2, '0');
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

export function convertMetersToKilometers(valueInMeters: number): number {
  return valueInMeters / 1000;
}

export function isUnixTimeToday(dt: number, timezone: number) {
  const targetDate = convertUnixToDate({unixTime: dt, unixTimezone: timezone});
  const currentDate = convertUnixToDate({
    unixTime: Date.now() / 1000,
    unixTimezone: timezone,
  });

  return targetDate === currentDate;
}

export function convertUnixToDay({
  unixTime,
  unixTimezone,
}: ConvertProps): string {
  const date = new Date((unixTime + unixTimezone) * 1000);
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return daysOfWeek[date.getUTCDay()];
}
