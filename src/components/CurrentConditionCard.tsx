import {styled} from '@gluestack-style/react';
import {Card, Heading, Text, View, Icon} from '@gluestack-ui/themed';
import {Cloud, Droplet, Gauge, Wind} from 'lucide-react-native';
import React from 'react';
import {WeatherType} from '../../types/WeatherType';

export const CurrentConditionCard = ({
  data,
  loading,
}: {
  data: WeatherType;
  loading: boolean;
}) => {
  const Row = styled(View, {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
  });

  const Item = styled(Card, {
    width: '48%',
    gap: 4,
  });

  const {wind, main, clouds} = data;

  return (
    <View p="$4">
      <Heading size="md" color="$white" my="$4">
        Current Conditions
      </Heading>
      <Row>
        <Item size="md" variant="elevated" backgroundColor="$blue200">
          <Heading mb="$1" size="md">
            Wind
          </Heading>
          {/* @ts-ignore, theme problem with Icon size, ts ignore for now */}
          <Icon as={Wind} size={48} />
          <Text size="sm">{wind.speed} mph</Text>
        </Item>
        <Item size="md" variant="elevated" backgroundColor="$amber200">
          <Heading mb="$1" size="md">
            Humidity
          </Heading>
          {/* @ts-ignore, theme problem with Icon size, ts ignore for now */}
          <Icon as={Droplet} size={48} />
          <Text size="sm">{main.humidity} %</Text>
        </Item>
        <Item size="md" variant="elevated" backgroundColor="$green200">
          <Heading mb="$1" size="md">
            Cloud
          </Heading>
          {/* @ts-ignore, theme problem with Icon size, ts ignore for now */}
          <Icon as={Cloud} size={48} />
          <Text size="sm">{clouds.all} %</Text>
        </Item>
        <Item size="md" variant="elevated" backgroundColor="$violet200">
          <Heading mb="$1" size="md">
            Pressure
          </Heading>
          {/* @ts-ignore, theme problem with Icon size, ts ignore for now */}
          <Icon as={Gauge} size={48} />
          <Text size="sm">{main.pressure} hPa</Text>
        </Item>
      </Row>
    </View>
  );
};
export default CurrentConditionCard;
