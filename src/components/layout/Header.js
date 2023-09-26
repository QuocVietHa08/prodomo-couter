import React, { useState } from "react";
import { Drawler, Image, Text, View } from "react-native";
import {
  goBack,
  toggleDrawer,
  navigationRef,
  navigate,
} from "../../navigation/NavigationServices";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  Bars3Icon,
  ArrowUturnLeftIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
  ClockIcon,
  FireIcon,
} from "react-native-heroicons/solid";
import RouteName from "../../navigation/RouteName";

const ClockAndFireIcon = () => {
  return (
    <TouchableOpacity className="border p-1 rounded-3xl bg-white" onPress={() => console.log("hello")}>
      <View className="flex flex-row items-center gap-x-2">
        <ClockIcon color="#471515" />
        <Text>|</Text>
        <FireIcon color="#471515" />
      </View>
    </TouchableOpacity>
  )
}

const Headers = ({ isReturn = false }) => {
  const [isPodcastSound, setIsPodcastSound] = useState(false);
  if (isReturn) {
    return (
      <View className="w-full px-5">
        <TouchableOpacity onPress={() => navigate(RouteName.Home)}>
          <ArrowUturnLeftIcon color="#471515" />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View className="w-full px-5 flex flex-row items-center justify-between">
      <TouchableOpacity onPress={toggleDrawer}>
        <View>
          <Bars3Icon color="#471515" />
        </View>
      </TouchableOpacity>
      <View>
        <ClockAndFireIcon />
      </View>
      <View>
        <TouchableOpacity onPress={() => setIsPodcastSound((prev) => !prev)}>
          {isPodcastSound ? (
            <SpeakerWaveIcon color="#471515" />
          ) : (
            <SpeakerXMarkIcon color="#471515" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Headers;
