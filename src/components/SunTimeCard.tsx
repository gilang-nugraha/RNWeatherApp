import {
  Card,
  HStack,
  Heading,
  Text,
  VStack,
  View,
  Box,
} from '@gluestack-ui/themed';
import React from 'react';
import {WeatherType} from '../../types/WeatherType';
import {convertUnixToHours} from '../utils/utils';
import {Skeleton} from './Skeleton';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  skeleton: {
    width: '100%',
    height: 150,
  },
});

export const SunTimeCard = ({
  data,
  loading,
}: {
  data: WeatherType;
  loading: boolean;
}) => {
  if (loading) {
    return (
      <Box p="$4">
        <Skeleton isLoading={true}>
          <View style={styles.skeleton} />
        </Skeleton>
      </Box>
    );
  }

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
                unixTime: data?.sys?.sunrise,
                unixTimezone: data?.timezone,
              })}
            </Heading>
          </VStack>
          <VStack>
            <Text size="md" fontWeight="500">
              Sunset
            </Text>
            <Heading size="4xl">
              {convertUnixToHours({
                unixTime: data?.sys?.sunset,
                unixTimezone: data?.timezone,
              })}
            </Heading>
          </VStack>
        </HStack>
      </Card>
    </View>
  );
};
export default SunTimeCard;
