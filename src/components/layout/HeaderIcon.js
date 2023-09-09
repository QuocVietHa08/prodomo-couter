import { View, Text, TouchableOpacity, } from "react-native";
import React from "react";
import { Bars3Icon } from 'react-native-heroicons/outline';

export default function HeaderIcon({ onPress }) {
  return (
    <TouchableOpacity className="ml-5" onPress={onPress}>
      <View>
        <Bars3Icon color="black" /> 
      </View>
    </TouchableOpacity>
  );
}
