import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";

import HomeScreen from "../../screens/HomeScreen";
import Login from "../../screens/Login";
import Setting from "../../screens/Setting";
import Welcome from "../../screens/Welcome";
import TimeEnd from "../../screens/TimeEnd";
import TimeStart from "../../screens/TimeStart";
import RouteName from "../RouteName";
import { drawerComps } from "./CustomDrawerContent.constant";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawerContent from "./CustomDrawerContent";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const screenOptions = {
  headerShown: false,
};

const AppDrawer = () => {
  console.log("drawer:", drawerComps);
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      initialRouteName={RouteName.Home}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: "#FFF2F2",
          width: 240,
        },
        drawerItemStyle: {
          backgroundColor: "#FFF2F2",
        },
        drawerLabelStyle: {
          color: "#471515",
        },
      }}
    >
      {drawerComps.map(({ id, component }) => (
        <Drawer.Screen key={id} name={id} component={component} />
      ))}
    </Drawer.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <>
      <Stack.Screen
        name={RouteName.AppDrawer}
        component={AppDrawer}
        options={screenOptions}
      />
      <Stack.Screen
        name={RouteName.Home}
        component={HomeScreen}
        options={screenOptions}
      />
      <Stack.Screen
        name={RouteName.TimeEnd}
        component={TimeEnd}
        options={screenOptions}
      />
      <Stack.Screen
        name={RouteName.TimeStart}
        component={TimeStart}
        options={screenOptions}
      />
      <Stack.Screen
        name={RouteName.Welcome}
        component={Welcome}
        options={screenOptions}
      />
    </>
  );
};

export default AppNavigator;
