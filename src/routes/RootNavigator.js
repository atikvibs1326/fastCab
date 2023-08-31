import React, { useEffect, useState } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from "react-redux";
import { Colors } from '../utils';


import { RouteName, SideNavigator } from '../routes';

import {
  LoginScreen, RegisterScreen, OtpVeryfiveScreen,
  SplashScreen, RegistrationSuccessful,
  Swiperscreen,
  TranslationScreen, ForgotPassword, SelectAddress, WhereToScreen, DriverSelectScreen, PaymentScreen, PaytmSuccessFully, CreditCardScreen, CancelTripScreen, Chatscreen
} from '../screens';

const RootNavigator = props => {
  const Stack = createNativeStackNavigator();

  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const MyTheme = {
    ...DefaultTheme,
    Colors: Colors
  };
  const [colorValue, setColorValue] = useState(MyTheme)
  useEffect(() => {
    if (Colors.length != 0 && colorrdata != "") {
      Colors.theme_background_topaz = colorrdata;
      const MyThemeNew = {
        ...DefaultTheme,
        Colors: Colors
      };
      setColorValue(MyThemeNew)
    }
  }, [colorrdata, Colors])
  return (
    <NavigationContainer theme={colorValue}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={'SplashScreen'} component={SplashScreen} />
        <Stack.Screen name={RouteName.LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen name={RouteName.REGISTER_SCREEN} component={RegisterScreen} />
        <Stack.Screen name={RouteName.SIDE_NAVIGATOR} component={SideNavigator} />
        <Stack.Screen name={RouteName.REGIATRAION_SUCCESSFULL} component={RegistrationSuccessful} />
        <Stack.Screen name={RouteName.OTP_VERYFY_SCREEN} component={OtpVeryfiveScreen} />
        <Stack.Screen name={RouteName.SWIPER_SCREEN} component={Swiperscreen} />
        <Stack.Screen name={RouteName.SELECT_LANGUAGE} component={TranslationScreen} />
        <Stack.Screen name={RouteName.Forget_Password} options={{ headerShown: false, headerShadowVisible: false }} component={ForgotPassword} />
        <Stack.Screen name={RouteName.SELECTION_ADDRESS_SCREEN} component={SelectAddress} />
        <Stack.Screen name={RouteName.WHERE_TO_SCREEN} component={WhereToScreen} />
        <Stack.Screen name={RouteName.DRIVER_SELECT_SCREEN} component={DriverSelectScreen} />
      
        <Stack.Screen name={RouteName.PATMENT_SUCCESSFULL_SCREEN} component={PaytmSuccessFully} />
        <Stack.Screen name={RouteName.CREDIT_CARD_SCREEN} component={CreditCardScreen} />
        <Stack.Screen name={RouteName.CANCEL_TRIP_SCREEN} component={CancelTripScreen} />
        <Stack.Screen name={RouteName.CHAT_SCREEN} component={Chatscreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default RootNavigator;