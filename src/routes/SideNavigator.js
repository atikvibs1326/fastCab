import React, { useState, useEffect } from 'react';
import RouteName from './RouteName';
import { CustomSidebarMenu, AppHeader } from '../components';
import { Colors, SF, SW } from '../utils';
import { DefaultTheme } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { TabNavigator } from '../routes';
import {
  Chatscreen, SettingsScreen, HelpScreen, FAQScreen, ReviewsScreen, NotificationScreen, PaymentScreen
} from '../screens';
import {Sidemenu} from '../styles';

const SideNavigator = (props) => {
  const { t } = useTranslation();
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const Drawer = createDrawerNavigator();
  const Stack = createNativeStackNavigator();

  const HeaderArray = {
    headerShown: true,
    headerTintColor: Colors.theme_background_topaz,
    headerShadowVisible: false,
    headerStyle: Sidemenu.headerStyle,
    headerTitleStyle: Sidemenu.headerTitlestyle,
  };

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
    <Drawer.Navigator theme={colorValue} drawerContent={(props) => <CustomSidebarMenu {...props} />} screenOptions={{
      headerShown: false,
      drawerStyle: {
        backgroundColor: Colors.white_text_color,
        width: SW(270),
      }
    }}
    >
      <Stack.Screen name={RouteName.HOME_SCREEN} component={TabNavigator} />
      <Drawer.Screen
        name={RouteName.CHAT_SCREEN} component={Chatscreen}
        options={{
          headerTitle: (props) => <AppHeader {...props} headerTitle={t("Chat_Text")} />,
         ...HeaderArray,
        }}
      />
      <Drawer.Screen
        name={RouteName.HELP_SCREEN} component={HelpScreen}
        options={{
          headerTitle: (props) => <AppHeader {...props} headerTitle={t("Help_Text")} />,
          ...HeaderArray,
        }}
      />
      <Drawer.Screen
        name={RouteName.FAQ_SCREEN} component={FAQScreen}
        options={{
          headerTitle: (props) => <AppHeader {...props} headerTitle={t("FAQ_Text")} />,
          ...HeaderArray,
        }}
      />
      <Drawer.Screen
        name={RouteName.NOTIFICTION_SCREEN} component={NotificationScreen}
        options={{
          headerTitle: (props) => <AppHeader {...props} headerTitle={t("Notification_Text")} />,
          ...HeaderArray,
        }}
      />
         <Drawer.Screen
        name={RouteName.PAYMENT_SCREEN} component={PaymentScreen}
        options={{
          headerTitle: (props) => <AppHeader {...props} headerTitle={t("Payment_Label")} />,
          ...HeaderArray,
        }}
      />
      <Drawer.Screen
        name={RouteName.REVIEWS_SCREEN} component={ReviewsScreen}
        options={{
          headerTitle: (props) => <AppHeader {...props} headerTitle={t("Reviews_Screen")} />,
          ...HeaderArray,
        }}
      />
      <Drawer.Screen
        name={RouteName.SETTING_SCREEN} component={SettingsScreen}
        options={{
          headerTitle: (props) => <AppHeader {...props} headerTitle={t("Setting_Text")} />,
          ...HeaderArray,
        }}
      />
    </Drawer.Navigator>

  );
}
export default SideNavigator;