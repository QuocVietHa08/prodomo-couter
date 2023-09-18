import React from 'react';
import { Drawler, Image, Text, View } from 'react-native';
import { goBack, toggleDrawer, navigationRef } from '../../navigation/NavigationServices';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Bars3Icon } from "react-native-heroicons/solid";

const Headers = () => {
  return (
    <View className="w-full px-5">
      <TouchableOpacity onPress={toggleDrawer}>
          <View>
            <Bars3Icon color="#471515" />
          </View>
        </TouchableOpacity>
    </View>  
  )
}

export default Headers