import React, { useEffect, useState } from "react";
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
import {
  CountdownCircleTimer,
  useCountdown,
} from "react-native-countdown-circle-timer";
import { useNavigation } from "@react-navigation/native";
import RouteName from "../navigation/RouteName";
import ButttonCancel from "../components/home/ButttonCancel";
import { useSelector, useDispatch } from "react-redux";
import {
  setStopCountDown,
  setTimeCountDown,
  setTimePurpose,
} from "../redux/home/homeReducer";
import { MOTIVATION_QUOTATIONS } from "../utils/appConstants";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TimeStart() {
  const { timeCountDown, isCountDown, timePurpose } = useSelector(
    (state) => state.homeReducer
  );

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [countDownQuote, setCountDownQuote] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCountDownQuote((prev) => {
        if (prev < 4) return prev + 1;
        return 0;
      });
    }, 10000);
  }, [countDownQuote]);

  const handleSecondToMinuesAndSeconds = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const handleOnCompleteScope = () => {
    dispatch(setStopCountDown());
    dispatch(setTimeCountDown(0));
    navigation.navigate(RouteName.TimeEnd);
  };

  const handleCancelScope = () => {
    navigation.navigate(RouteName.Home);
  };

  return (
    <View className="flex-1 bg-[#FFF2F2] flex-direction-column justify-evenly gap-30 items-center">
      <Text className="text-black text-3xl">Focus</Text>
      <Text className="text-black">
        {MOTIVATION_QUOTATIONS[countDownQuote]}
      </Text>

      <View>
        <CountdownCircleTimer
          isPlaying
          duration={timeCountDown}
          size="250"
          colors={"#471515"}
          colorsTime={[7, 5, 2, 0]}
          onComplete={handleOnCompleteScope}
        >
          {({ remainingTime }) => (
            <Text className="text-5xl">
              {handleSecondToMinuesAndSeconds(remainingTime)}
            </Text>
          )}
        </CountdownCircleTimer>
      </View>
      <View className="bg-white/40 px-3 py-1 rounded-3xl flex-row items-center gap-x-1.5 border">
        <View className="w-2 h-2 rounded-full bg-orange-400"></View>
        <Text>{timePurpose}</Text>
      </View>
      <ButttonCancel onPress={handleCancelScope} />
    </View>
  );
}
