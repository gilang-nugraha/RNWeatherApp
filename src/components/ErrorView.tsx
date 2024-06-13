import React from 'react';

import {Heading, Icon, Text, View} from '@gluestack-ui/themed';
import {CloudOff} from 'lucide-react-native';

export const ErrorView = () => {
  return (
    <View
      height="100%"
      width="100%"
      alignItems="center"
      justifyContent="center">
      {/* @ts-ignore, theme problem with Icon size, ts ignore for now */}
      <Icon as={CloudOff} size={128} stroke="white" />
      <Heading color="$white" size="2xl" mb="$4">
        Oops...
      </Heading>
      <Text color="$white">Error getting data, try pull to refresh</Text>
    </View>
  );
};

export default ErrorView;
