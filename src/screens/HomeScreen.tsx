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
import {useGetWeather} from '../stores/WeatherStore';

export const HomeScreen = () => {
  const {isLoading, data, refetch, isRefetching, error} = useGetWeather();

  const onRefresh = useCallback(() => {
    refetch();
  }, [refetch]);

  if (error) {
    return (
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        refreshControl={
          <RefreshControl refreshing={isRefetching} onRefresh={onRefresh} />
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
        <RefreshControl refreshing={isRefetching} onRefresh={onRefresh} />
      }>
      <WeatherCard data={data?.weather as WeatherType} loading={isLoading} />
      <ForecastTodayList
        data={data?.forecast as ForecastType}
        loading={isLoading}
      />
      <ForecastCard data={data?.forecast as ForecastType} loading={isLoading} />
      <CurrentConditionCard
        data={data?.weather as WeatherType}
        loading={isLoading}
      />
      <SunTimeCard data={data?.weather as WeatherType} loading={isLoading} />
    </ScrollView>
  );
};

export default HomeScreen;
