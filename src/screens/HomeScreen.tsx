import React, {useMemo} from 'react';
import {ScrollView} from 'react-native';

import {Box, Image, Text} from '@gluestack-ui/themed';
import {useGetForecast, useGetWeather} from '../stores/WeatherStore';
import WeatherCard from '../components/WeatherCard';
import CurrentConditionCard from '../components/CurrentConditionCard';
import SunTimeCard from '../components/SunTimeCard';
import ForecastCard from '../components/ForecastCard';
import {filterTimestampsForToday, isUnixTimeToday} from '../utils/utils';
import ForecastTodayList from '../components/ForecastTodayList';
import {WeatherType} from '../../types/WeatherType';
import {ForecastType} from '../../types/ForecastType';

const FeatureCard = ({iconSvg, name, desc}: any) => {
  return (
    <Box
      flexDirection="column"
      borderWidth={1}
      borderColor="$borderDark700"
      flex={1}
      m="$2"
      p="$4"
      rounded="$md">
      <Box alignItems="center" display="flex" flexDirection="row">
        <Image source={iconSvg} alt="document" width={22} height={22} />
        <Text fontSize={22} color="$white" fontWeight="500" ml="$2">
          {name}
        </Text>
      </Box>
      <Text color="$textDark400" mt="$2">
        {desc}
      </Text>
    </Box>
  );
};

export const HomeScreen = () => {
  const {isLoading: loadingWeather, data, error} = useGetWeather();
  const {isLoading: loadingForecast, data: forecast} = useGetForecast();

  if (!data && !forecast) {
    return <></>;
  } else {
    return (
      <Box flex={1} bg="$black" h="100%">
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <WeatherCard data={data as WeatherType} loading={loadingWeather} />
          <ForecastTodayList
            data={forecast as ForecastType}
            loading={loadingForecast}
          />
          <ForecastCard
            data={forecast as ForecastType}
            loading={loadingForecast}
          />
          <CurrentConditionCard
            data={data as WeatherType}
            loading={loadingWeather}
          />
          <SunTimeCard data={data as WeatherType} loading={loadingWeather} />
        </ScrollView>
      </Box>
    );
  }
};

export default HomeScreen;
