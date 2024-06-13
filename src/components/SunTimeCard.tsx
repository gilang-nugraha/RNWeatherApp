import {Card, HStack, Heading, Text, VStack, View} from '@gluestack-ui/themed';
import React from 'react';
import {WeatherType} from '../../types/WeatherType';
import {convertUnixToHours} from '../utils/utils';

export const SunTimeCard = ({data}: {data: WeatherType}) => {
  const {sys} = data;

  if (!data) return <></>;

  return (
    <View p="$4">
      <Heading size="md" color="$white" my="$4">
        Sunrise & Sunset
      </Heading>
      <Card size="md" variant="elevated" backgroundColor="$orange200">
        <HStack gap={4} justifyContent="space-between">
          <VStack>
            <Text size="md" fontWeight="500">
              Sunrise
            </Text>
            <Heading size="4xl">
              {convertUnixToHours({
                unixTime: sys.sunrise,
                unixTimezone: data.timezone,
              })}
            </Heading>
          </VStack>
          <VStack>
            <Text size="md" fontWeight="500">
              Sunset
            </Text>
            <Heading size="4xl">
              {convertUnixToHours({
                unixTime: sys.sunset,
                unixTimezone: data.timezone,
              })}
            </Heading>
          </VStack>
        </HStack>
      </Card>
    </View>
  );
};
export default SunTimeCard;
