import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ReferralScreen from '../screens/ReferralScreen';
import ResourcesScreen from '../screens/ResourcesScreen';
import MyReferral from '../screens/MyReferral';
import LeaderboardScreen from '../screens/LeaderBoardScreen';
import SignUpScreen from '../screens/SignUpScreen';
import AuthNative from '../Auth.native';

const Stack = createNativeStackNavigator();
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignUp"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Referral" component={ReferralScreen} />
        <Stack.Screen name="Resources" component={ResourcesScreen} />
        <Stack.Screen name="MyRef" component={MyReferral} />
        <Stack.Screen name="LeaderBoard" component={LeaderboardScreen} />
        <Stack.Screen name="Google" component={AuthNative} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
