import React from 'react';
import { Drawler, Image, Text, View } from 'react-native';
import { goBack, toggleDrawer, navigationRef, navigate } from '../../navigation/NavigationServices';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Bars3Icon, ArrowUturnLeftIcon } from "react-native-heroicons/solid";
import RouteName from '../../navigation/RouteName';

const Headers = ({ isReturn = false }) => {
  if (isReturn) {
    return <View className="w-full px-5">
      <TouchableOpacity onPress={() => navigate(RouteName.Home)}>
        <ArrowUturnLeftIcon color="#471515" />
      </TouchableOpacity>
    </View>
  }
  
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