import {Box, HStack, Image, Text, VStack} from '@gluestack-ui/themed';
import React from 'react';
import {IMG_URL} from '@env';
import {WeatherType} from '../../types/WeatherType';
import {Skeleton} from './Skeleton';
import {View} from 'lucide-react-native';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  skeleton: {
    width: '100%',
    height: 150,
  },
});

interface Props {
  data: WeatherType;
  loading: boolean;
}

export const WeatherCard = ({data, loading}: Props) => {
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
    <Box flexDirection="column" flex={1} p="$4">
      <HStack alignItems="center" justifyContent="space-between">
        <VStack>
          <Text fontSize={18} color="$white" fontWeight="500">
            Now
          </Text>
          <HStack alignItems="flex-end">
            <Text fontSize={72} color="$white" fontWeight="500">
              {Math.round(data?.main?.temp)}°
            </Text>
            <Image
              source={`${IMG_URL}/${data?.weather[0]?.icon}@4x.png`}
              alt="document"
            />
          </HStack>
          <HStack alignItems="flex-end">
            <Text fontSize={12} color="$white" fontWeight="500">
              High {Math.round(data?.main?.temp_min)}°
            </Text>
            <Text fontSize={12} color="$white" fontWeight="500">
              •
            </Text>
            <Text fontSize={12} color="$white" fontWeight="500">
              Low {Math.round(data?.main?.temp_max)}°
            </Text>
          </HStack>
        </VStack>
        <VStack alignItems="flex-end">
          <Text fontSize={22} color="$white" fontWeight="500" mb="$4">
            {data?.name}
          </Text>
          <Text
            fontSize={22}
            color="$white"
            fontWeight="500"
            textTransform="capitalize">
            {data?.weather[0]?.description}
          </Text>

          <Text fontSize={12} color="$white" fontWeight="500">
            Feels like {data?.main?.feels_like}°
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
};
export default WeatherCard;
