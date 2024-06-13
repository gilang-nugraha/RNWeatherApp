import {IMG_URL} from '@env';
import {
  Box,
  Card,
  Heading,
  Image,
  Text,
  VStack,
  View,
} from '@gluestack-ui/themed';
import _ from 'lodash';
import React, {useMemo} from 'react';
import {ForecastType, List} from '../../types/ForecastType';
import {
  convertUnixToDay,
  convertUnixToHours,
  isUnixTimeToday,
} from '../utils/utils';
import {Skeleton} from './Skeleton';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  skeleton: {
    width: '100%',
    height: 50,
  },
});

export const ForecastCard = ({
  data,
  loading,
}: {
  data: ForecastType;
  loading: boolean;
}) => {
  const listForecast = useMemo(() => {
    if (data) {
      //kinda tricky to get forecast right now
      //logic is get first object on forecast data to get time
      //and filter 3 days forcast to exact time as today time

      //get today time from forecast in unix and convert it to hour
      const todayTime = convertUnixToHours({
        unixTime: data?.list[0].dt,
        unixTimezone: data?.city?.timezone,
      });

      //get list that is not today
      const listData = data?.list.filter((item: any) => {
        return !isUnixTimeToday(item?.dt, data?.city?.timezone);
      });

      //return filter list that is not today and have same time as today
      return listData.filter((item: any) => {
        return (
          convertUnixToHours({
            unixTime: item?.dt,
            unixTimezone: data?.city?.timezone,
          }) === todayTime
        );
      });
    }
  }, [data]);

  return (
    <Box flexDirection="column" flex={1} p="$4">
      <Heading size="md" color="$white" my="$4">
        3-day forecast
      </Heading>
      {loading ? (
        <VStack gap={12}>
          {[...Array(3)].map((_, index) => (
            <Skeleton isLoading={true} key={index}>
              <View style={styles.skeleton} />
            </Skeleton>
          ))}
        </VStack>
      ) : (
        <VStack gap={12}>
          {_.sortBy(listForecast, 'dt', 'asc').map(
            (item: List, index: number) => (
              <Card
                key={index}
                flexDirection="row"
                backgroundColor="$indigo600"
                alignItems="center"
                justifyContent="space-between"
                py="$0">
                <Text fontSize={18} color="$white" fontWeight="500" w={75}>
                  {convertUnixToDay({
                    unixTime: item?.dt,
                    unixTimezone: data?.city?.timezone,
                  })}
                </Text>
                <Image
                  source={`${IMG_URL}/${item?.weather[0]?.icon}@4x.png`}
                  alt="document"
                  w={48}
                  h={48}
                />
                <Text fontSize={18} color="$white" fontWeight="500">
                  {Math.round(item?.main?.temp)}°
                </Text>
              </Card>
            ),
          )}
        </VStack>
      )}
    </Box>
  );
};
export default ForecastCard;
