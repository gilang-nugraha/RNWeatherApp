import {Box, HStack, Image, Text, VStack} from '@gluestack-ui/themed';
import React from 'react';
import {IMG_URL} from '@env';
import {WeatherType} from '../../types/WeatherType';

export const WeatherCard = ({data}: {data: WeatherType}) => {
  const {main, weather, name} = data;

  if (!data) return <></>;
  return (
    <Box flexDirection="column" flex={1} p="$4">
      <HStack alignItems="center" justifyContent="space-between">
        <VStack>
          <Text fontSize={18} color="$white" fontWeight="500">
            Now
          </Text>
          <HStack alignItems="flex-end">
            <Text fontSize={72} color="$white" fontWeight="500">
              {Math.round(main?.temp)}°
            </Text>
            <Image
              source={`${IMG_URL}/${weather[0]?.icon}@4x.png`}
              alt="document"
            />
          </HStack>
          <HStack alignItems="flex-end">
            <Text fontSize={12} color="$white" fontWeight="500">
              High {Math.round(main?.temp_min)}°
            </Text>
            <Text fontSize={12} color="$white" fontWeight="500">
              •
            </Text>
            <Text fontSize={12} color="$white" fontWeight="500">
              Low {Math.round(main?.temp_max)}°
            </Text>
          </HStack>
        </VStack>
        <VStack alignItems="flex-end">
          <Text fontSize={22} color="$white" fontWeight="500" mb="$4">
            {name}
          </Text>
          <Text
            fontSize={22}
            color="$white"
            fontWeight="500"
            textTransform="capitalize">
            {weather[0]?.description}
          </Text>

          <Text fontSize={12} color="$white" fontWeight="500">
            Feels like {main?.feels_like}°
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
};
export default WeatherCard;
