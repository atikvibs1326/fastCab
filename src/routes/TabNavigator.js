import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import { HomeTab, MessagesList, Profile, Arriving, ChooseTrip } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { Style, Sidemenu } from '../styles';
import { ColorPicker, CustomSidebarMenu, HeaderLeftMenuIcon, VectorIcon,AppHeader } from '../components';
import RouteName from '../routes/RouteName';
import { Colors, SH, SF } from '../utils';
import { useTranslation } from "react-i18next";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HeaderArray = {
  headerShown: true,
  headerTintColor: Colors.theme_background_topaz,
  headerShadowVisible: false,
  headerStyle: Sidemenu.headerStyle,
  headerTitleStyle: {
    color: Colors.theme_background_topaz,
    fontSize: SF(20),
    fontWeight: '700'
  },
};


function DrawerSidebarScreen(props) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ paddingTop: 0 }}>
      <CustomSidebarMenu {...props} />
    </DrawerContentScrollView>
  );
}
function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="HomeScsreenTabAll" drawerContent={props => <DrawerSidebarScreen {...props} />}>
      <Drawer.Screen name="HomeScsreenTabAll"
        options={{ headerShown: false }}
        component={HomeScsreenTabAll} />
    </Drawer.Navigator>
  );
}
function Root() {
  return (
    <Stack.Navigator screenOptions="screen">
      <Stack.Screen
        name="Drawer"
        component={MyDrawer}
        options={{
          title: '',
          headerShown: false,
        }}
      />
      <Stack.Screen name="Homese" component={HomeScsreenTabAll}
        options={{
          title: '',
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}
export default Root;

function HomeTabScreenStack({ navigation }) {
  const { t } = useTranslation();
  return (
    <Stack.Navigator initialRouteName="HomeTab">
      <Stack.Screen
        name="HomeTab"
        component={HomeTab}
        options={{
          headerTitle: (props) => <AppHeader {...props} headerTitle={t("Home_Text")} />,
          ...HeaderArray,
          headerLeft: () => (
            <HeaderLeftMenuIcon onPress={() => navigation.toggleDrawer()} />
          ),
          headerRight: () => (
            <ColorPicker />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
function MessagesListTabStack({ navigation }) {
  const { t } = useTranslation();
  return (
    <Stack.Navigator initialRouteName="MessagesList">
      <Stack.Screen
        name="MessagesList"
        component={MessagesList}
        options={{
          headerTitle: (props) => <AppHeader {...props} headerTitle={t("Messages")} />,
          ...HeaderArray,
          headerLeft: () => (
            <HeaderLeftMenuIcon onPress={() => navigation.toggleDrawer()} />
          ),
          headerRight: () => (
            <ColorPicker />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
function ArrivingTabStack({ navigation }) {
  const { t } = useTranslation();
  return (
    <Stack.Navigator initialRouteName="Arriving">
      <Stack.Screen
        name="Arriving"
        component={Arriving}
        options={{
          headerTitle: (props) => <AppHeader {...props} headerTitle={t("Arriving_Label")} />,
          ...HeaderArray,
          headerLeft: () => (
            <HeaderLeftMenuIcon onPress={() => navigation.toggleDrawer()} />
          ),
          headerRight: () => (
            <ColorPicker />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
function ChooseTripTabStack({ navigation }) {
  const { t } = useTranslation();
  return (
    <Stack.Navigator initialRouteName="ChooseTrip">
      <Stack.Screen
        name="ChooseTrip"
        component={ChooseTrip}
        options={{
          headerTitle: (props) => <AppHeader {...props} headerTitle={t("Choose_A_Trip")} />,
          ...HeaderArray,
          headerLeft: () => (
            <HeaderLeftMenuIcon onPress={() => navigation.toggleDrawer()} />
          ),
          headerRight: () => (
            <ColorPicker />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function ProfileScreenStack({ navigation }) {
  const { t } = useTranslation();
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitle: (props) => <AppHeader {...props} headerTitle={t("Profile_Text")} />,
          ...HeaderArray,
          headerLeft: () => (
            <HeaderLeftMenuIcon onPress={() => navigation.toggleDrawer()} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
export function HomeScsreenTabAll() {
  const { t } = useTranslation();
  return (
    <Tab.Navigator initialRouteName="Homes"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.theme_background_topaz,
        tabBarInactiveTintColor: Colors.gray_text_color,
        activeBackgroundColor: Colors.white_text_color,
        labeled: true,
        labelStyle: {
        },
        tabStyle: {
          height: SH(49),
          backgroundColor: Colors.white_text_color,
          paddingTop: 0,
        },
      }}
    >
      <Tab.Screen
        name={RouteName.HOME_TAB}
        component={HomeTabScreenStack}
        options={{
          tabBarLabel: t("Home_Text"),
          tabBarIcon: ({ focused }) => (
            <Icon
              size={SF(19)}
              name="home"
              style={{ color: focused ? Colors.theme_background_topaz : Colors.gray_text_color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.MESSAGE_TAB}
        component={MessagesListTabStack}
        options={{
          tabBarLabel: t("Messages"),
          tabBarIcon: ({ focused }) => (
            <View>
              <VectorIcon icon="Entypo" name="message" style={{ color: focused ? Colors.theme_background_topaz : Colors.gray_text_color }} size={SF(27)} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.ARRIVING}
        component={ArrivingTabStack}
        options={{
          tabBarLabel: t("Arriving_Label"),
          tabBarIcon: ({ focused }) => (
            <VectorIcon icon="AntDesign"
              size={SF(23)}
              name="areachart"
              style={{ color: focused ? Colors.theme_background_topaz : Colors.gray_text_color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.CHOOSE_TRIP}
        component={ChooseTripTabStack}
        options={{
          tabBarLabel: t("Choose_A_Trip"),
          tabBarIcon: ({ focused }) => (
            <VectorIcon icon="MaterialIcons"
              size={SF(23)}
              name="trip-origin"
              style={{ color: focused ? Colors.theme_background_topaz : Colors.gray_text_color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.PROFILE_TAB}
        component={ProfileScreenStack}
        options={{
          tabBarLabel: t("Profile_Text"),
          tabBarIcon: ({ focused }) => (
            <VectorIcon icon="FontAwesome"
              size={SF(19)}
              name="user-circle"
              style={{ color: focused ? Colors.theme_background_topaz : Colors.gray_text_color }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
