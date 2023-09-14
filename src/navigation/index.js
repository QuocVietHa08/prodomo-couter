import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import Login from "../screens/Login";
import Setting from "../screens/Setting";
import Welcome from "../screens/Welcome";
import TimeEnd from "../screens/TimeEnd";
import TimeStart from "../screens/TimeStart";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { BeakerIcon } from "@heroicons/react/solid";
import { Text, TouchableOpacity, View } from "react-native";
import HeaderIcon from "../components/layout/HeaderIcon";
import RouteName from "./RouteName";
import {
  getCurrentRoute,
  navigationRef,
  routeNameRef,
} from "./NavigationServices";
import AppNavigator from "./stack/AppNavigator";
// import Root from "./DrawerNavigation";

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={RouteName.Welcome}
        screenOptions={{
          headerShown: false,
        }}
      >
        {AppNavigator()}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
