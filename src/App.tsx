import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppNavigator from './navigation/AppNavigator';
import {TabProvider} from './TabContext';
export default function App() {
  return (
    <SafeAreaProvider>
      <TabProvider>
        <AppNavigator />
      </TabProvider>
    </SafeAreaProvider>
  );
}
