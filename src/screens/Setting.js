import React, { memo, useEffect, useState } from "react";
import Headers from "../components/layout/Header";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Pressable,
  Modal,
  StyleSheet,
  SectionList,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Setting() {

  return (
    <SafeAreaView className="flex-1 bg-[#FFF2F2]">
      <Headers />
      <View className="flex-1 flex-direction-column justify-evenly gap-30 items-center">
        <Text className="text-black text-3xl">Setting</Text>


        
      </View>
    </SafeAreaView>
  );
}

export default memo(Setting)