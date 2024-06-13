import {Card, Heading, Icon, Text, View} from '@gluestack-ui/themed';
import {Cloud, Droplet, Gauge, Wind} from 'lucide-react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {WeatherType} from '../../types/WeatherType';
import {Skeleton} from './Skeleton';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    gap: 4,
    height: 150,
  },
});

export const CurrentConditionCard = ({
  data,
  loading,
}: {
  data: WeatherType;
  loading: boolean;
}) => {
  return (
    <View p="$4">
      <Heading size="md" color="$white" my="$4">
        Current Conditions
      </Heading>
      <View style={styles.row}>
        <Skeleton isLoading={loading}>
          <Card
            style={styles.card}
            size="md"
            variant="elevated"
            backgroundColor="$blue200">
            <Heading mb="$1" size="md">
              Wind
            </Heading>
            {/* @ts-ignore, theme problem with Icon size, ts ignore for now */}
            <Icon as={Wind} size={48} />
            <Text size="sm">{data?.wind?.speed} mph</Text>
          </Card>
        </Skeleton>
        <Skeleton isLoading={loading}>
          <Card
            style={styles.card}
            size="md"
            variant="elevated"
            backgroundColor="$amber200">
            <Heading mb="$1" size="md">
              Humidity
            </Heading>
            {/* @ts-ignore, theme problem with Icon size, ts ignore for now */}
            <Icon as={Droplet} size={48} />
            <Text size="sm">{data?.main?.humidity} %</Text>
          </Card>
        </Skeleton>
        <Skeleton isLoading={loading}>
          <Card
            style={styles.card}
            size="md"
            variant="elevated"
            backgroundColor="$green200">
            <Heading mb="$1" size="md">
              Cloud
            </Heading>
            {/* @ts-ignore, theme problem with Icon size, ts ignore for now */}
            <Icon as={Cloud} size={48} />
            <Text size="sm">{data?.clouds?.all} %</Text>
          </Card>
        </Skeleton>
        <Skeleton isLoading={loading}>
          <Card
            style={styles.card}
            size="md"
            variant="elevated"
            backgroundColor="$violet200">
            <Heading mb="$1" size="md">
              Pressure
            </Heading>
            {/* @ts-ignore, theme problem with Icon size, ts ignore for now */}
            <Icon as={Gauge} size={48} />
            <Text size="sm">{data?.main?.pressure} hPa</Text>
          </Card>
        </Skeleton>
      </View>
    </View>
  );
};
export default CurrentConditionCard;
