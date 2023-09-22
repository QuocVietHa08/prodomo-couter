import React, { memo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RouteName from "./RouteName";
import { navigationRef } from "./NavigationServices";
import AppNavigator from "./stack/AppNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home, Setting } from "../screens";
import { drawerComps } from "./stack/CustomDrawerContent.constant";

const Stack = createStackNavigator();

function AppStack() {
  return (
    <SafeAreaProvider>
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
    </SafeAreaProvider>
  );
}

export default memo(AppStack);
