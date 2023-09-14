import { View, Text, StatusBar, Image } from 'react-native'
import React, { useEffect } from 'react'
// import { useNavigation } from '@react-navigation/native'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { navigate } from '../navigation/NavigationServices';
import RouteName from '../navigation/RouteName';

export default function Welcome() {
  // const navigation = useNavigation();
  const ring1Padding = useSharedValue(0);
  const ring2Padding = useSharedValue(0);

  useEffect(() => {
    ring1Padding.value = 0;
    ring2Padding.value = 0;
   setTimeout(() => ring1Padding.value = withSpring(ring1Padding.value + hp(3)), 100)  
   setTimeout(() => ring2Padding.value = withSpring(ring2Padding.value + hp(3)), 300)  

   setTimeout(() => navigate(RouteName.Home), 2500)
  }, [])

  return (
    <View className="flex-1 justify-center items-center space-y-10 bg-[#FFF2F2]">
      <StatusBar style="light" />
      <Animated.View className="bg-red-500/20 rounded-full" style={{ padding: ring1Padding}}>
        <Animated.View className="bg-red-500/20 rounded-full" style={{ padding: ring2Padding}}>
          <Image
            source={require("../../assets/logo.png")}
            style={{ width: hp(25), height: hp(25)}}
          />
        </Animated.View>
      </Animated.View>

      <View className="flex items-center space-y-2">
        <Text className="font-bold text-[#471515] tracking-widest" style={{ fontSize: hp(7)}}>Focus</Text>
        <Text className="font-medium text-[#471515] tracking-widest" style={{ fontSize: hp(2)}}>More Focus, More success</Text>
      </View>
    </View>
  )
}