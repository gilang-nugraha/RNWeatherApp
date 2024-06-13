import {IMG_URL} from '@env';
import {
  Box,
  Card,
  Heading,
  Image,
  ScrollView,
  Text,
  VStack,
  View,
} from '@gluestack-ui/themed';
import _ from 'lodash';
import React, {useMemo} from 'react';
import {ForecastType, List} from '../../types/ForecastType';
import {convertUnixToHours, isUnixTimeToday} from '../utils/utils';

export const ForecastTodayList = ({data}: {data: ForecastType}) => {
  const {list, city} = data;

  const listForecast = useMemo(() => {
    if (list) {
      return list.filter((item: any) => {
        return isUnixTimeToday(item.dt, city.timezone);
      });
    }
  }, [list, city]);

  if (!data) return <></>;
  return (
    <View p="$4">
      <Heading size="md" color="$white" my="$4">
        Forecast Today (every 3 hours)
      </Heading>

      <ScrollView contentInsetAdjustmentBehavior="automatic" horizontal>
        <Box flexDirection="row" flex={1} gap={12}>
          {_.sortBy(listForecast, 'dt', 'asc').map(
            (item: List, index: number) => (
              <Card
                key={index}
                size="sm"
                variant="elevated"
                backgroundColor="$indigo600">
                <VStack alignContent="center">
                  <Text fontSize={18} color="$white" textAlign="center">
                    {Math.round(item.main.temp)}°
                  </Text>
                  <Image
                    source={`${IMG_URL}/${item.weather[0].icon}@4x.png`}
                    alt="document"
                  />
                  <Text fontSize={18} color="$white" textAlign="center">
                    {convertUnixToHours({
                      unixTime: item.dt,
                      unixTimezone: city.timezone,
                    })}
                  </Text>
                </VStack>
              </Card>
            ),
          )}
        </Box>
      </ScrollView>
    </View>
  );
};
export default ForecastTodayList;
