import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { Home, Welcome, TimeEnd, TimeStart, Setting  } from '../../screens/index';
import RouteName from "../RouteName";
import { drawerComps } from "./CustomDrawerContent.constant";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawerContent from "./CustomDrawerContent";

const Drawer = createDrawerNavigator();

const screenOptions = {
  headerShown: false,
};

function AppDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      backBehavior="none"
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

const Stack = createStackNavigator();

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
        component={Home}
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
