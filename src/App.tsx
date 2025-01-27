import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppNavigator from './navigation/AppNavigator';
import {TabProvider} from './TabContext';
import {ZohoDeskPortalSDK} from '@zohocorp/zohodesk-portal-apikit';
export default function App() {
  useEffect(() => {
    ZohoDeskPortalSDK.initialise(
      '60033650541',
      'edbsn61cbeb2a1b1244f9569eb5c87f58ce5e6a38bed338317710f5b48479d5c66d60',
      'IN',
    );
  }, []);
  return (
    <SafeAreaProvider>
      <TabProvider>
        <AppNavigator />
      </TabProvider>
    </SafeAreaProvider>
  );
}
