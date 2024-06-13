import {IMG_URL} from '@env';
import {
  Box,
  Card,
  HStack,
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
import {Skeleton} from './Skeleton';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  skeleton: {
    width: '25%',
    height: 150,
  },
});

export const ForecastTodayList = ({
  data,
  loading,
}: {
  data: ForecastType;
  loading: boolean;
}) => {
  const listForecast = useMemo(() => {
    if (data) {
      return data?.list.filter((item: any) => {
        return isUnixTimeToday(item?.dt, data?.city?.timezone);
      });
    }
  }, [data]);

  return (
    <View p="$4">
      <Heading size="md" color="$white" my="$4">
        Forecast Today (every 3 hours)
      </Heading>
      {loading || !data ? (
        <HStack gap={12}>
          {[...Array(4)].map((_, index) => (
            <Skeleton isLoading={true} key={index}>
              <View style={styles.skeleton} />
            </Skeleton>
          ))}
        </HStack>
      ) : (
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
                      {Math.round(item?.main.temp)}°
                    </Text>
                    <Image
                      source={`${IMG_URL}/${item?.weather[0].icon}@4x.png`}
                      alt="document"
                    />
                    <Text fontSize={18} color="$white" textAlign="center">
                      {convertUnixToHours({
                        unixTime: item?.dt,
                        unixTimezone: data?.city?.timezone,
                      })}
                    </Text>
                  </VStack>
                </Card>
              ),
            )}
          </Box>
        </ScrollView>
      )}
    </View>
  );
};
export default ForecastTodayList;
