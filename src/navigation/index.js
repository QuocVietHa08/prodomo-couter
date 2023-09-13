import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
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
import { BeakerIcon } from '@heroicons/react/solid'
import { Text, TouchableOpacity, View } from "react-native";
import HeaderIcon from "../components/layout/HeaderIcon";
import RouteName from "./RouteName";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName={RouteName.Welcome}
        screenOptions={({ route, navigation }) => ({ 
          drawerStyle: {
            backgroundColor: '#FFF2F2'
          },
          drawerLabelStyle: {
            color: '#471515'
          },
          headerLeft: (props) => <HeaderIcon onPress={navigation.toggleDrawer} />,  
          headerShown: route.name === RouteName.Welcome ? false : true,
        })}
      >
        <Drawer.Screen name={RouteName.Home} component={HomeScreen} options={{
          headerStyle: {
            backgroundColor: '#FFF2F2'
          }
        }}/>
        <Drawer.Screen name={RouteName.Welcome} component={Welcome} />
        <Drawer.Screen name={RouteName.Setting} component={Setting} />
        <Drawer.Screen name={RouteName.TimeEnd} component={TimeEnd} /> 
        <Drawer.Screen name={RouteName.TimeStart} component={TimeStart} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
