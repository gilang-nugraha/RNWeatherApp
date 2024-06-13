/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {config} from '@gluestack-ui/config';
import {Box, GluestackUIProvider} from '@gluestack-ui/themed';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/screens/HomeScreen';

function App(): JSX.Element {
  const backgroundStyle = {
    backgroundColor: Colors.darker,
    // height: '100%',
  };

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <GluestackUIProvider config={config}>
          <Box
            style={{
              backgroundColor: Colors.black,
            }}
            height="100%">
            <HomeScreen />
          </Box>
        </GluestackUIProvider>
      </SafeAreaView>
    </QueryClientProvider>
  );
}

export default App;
