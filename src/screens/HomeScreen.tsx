import React, {useCallback} from 'react';

import {ScrollView, RefreshControl} from 'react-native';

import {ForecastType} from '../../types/ForecastType';
import {WeatherType} from '../../types/WeatherType';
import CurrentConditionCard from '../components/CurrentConditionCard';
import ErrorView from '../components/ErrorView';
import ForecastCard from '../components/ForecastCard';
import ForecastTodayList from '../components/ForecastTodayList';
import SunTimeCard from '../components/SunTimeCard';
import WeatherCard from '../components/WeatherCard';
import {useGetForecast, useGetWeather} from '../stores/WeatherStore';

export const HomeScreen = () => {
  const {
    isLoading: loadingWeather,
    data,
    refetch: refetchWeather,
    isRefetching: isRefetchingWeather,
    error: errorWeather,
  } = useGetWeather();

  const {
    isLoading: loadingForecast,
    data: forecast,
    refetch: refetchForecast,
    isRefetching: isRefetchingForecast,
    error: errorForecast,
  } = useGetForecast();

  const onRefresh = useCallback(() => {
    refetchWeather();
    refetchForecast();
  }, [refetchWeather, refetchForecast]);

  if (errorWeather && errorForecast) {
    return (
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        refreshControl={
          <RefreshControl
            refreshing={isRefetchingWeather || isRefetchingForecast}
            onRefresh={onRefresh}
          />
        }
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{
          flexGrow: 1,
        }}>
        <ErrorView />
      </ScrollView>
    );
  }

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      refreshControl={
        <RefreshControl
          refreshing={isRefetchingWeather || isRefetchingForecast}
          onRefresh={onRefresh}
        />
      }>
      <WeatherCard data={data as WeatherType} loading={loadingWeather} />
      <ForecastTodayList
        data={forecast as ForecastType}
        loading={loadingForecast}
      />
      <ForecastCard data={forecast as ForecastType} loading={loadingForecast} />
      <CurrentConditionCard
        data={data as WeatherType}
        loading={loadingWeather}
      />
      <SunTimeCard data={data as WeatherType} loading={loadingWeather} />
    </ScrollView>
  );
};

export default HomeScreen;
