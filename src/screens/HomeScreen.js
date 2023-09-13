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
import moment from "moment";
import { SafeAreaView } from "react-native-safe-area-context";
import FocusSettingModal from "../components/home/FocusSettingModal";
import { useNavigation } from "@react-navigation/native";
import RouteName from "../navigation/RouteName";
import ButtonStart from "../components/home/ButtonStart";
import ButttonCancel from "../components/home/ButttonCancel";
import { useDispatch } from "react-redux"; 
import { setTimeCountDown, setStartCountDown, setTimePurpose } from '../redux/home/homeReducer';
// import Modal from 'react-native-modal';

export default function HomeScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [timer, setTimer] = useState(25 * 60);
  const [isStart, setIsStart] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [trigger, setTrigger] = useState(0);
  const [timePurpose, setTimePurpose] = useState('Work');

  const onStart = () => {
    setIsStart((prev) => !prev);
  };

  const handleSecondToMinuesAndSeconds = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const handleOnCompleteScope = () => {
    setIsStart(false);
    navigation.navigate(RouteName.TimeEnd)
  }

  const handleStartScope = () => {
    dispatch(setStartCountDown())
    dispatch(setTimeCountDown(timer))
    setTimePurpose(timePurpose)
    navigation.navigate(RouteName.TimeStart)
  }

  const handleCancelScope = () => {
    console.log("hello")
    setIsStart(false);
    setTimer(25 * 60);
    setTrigger((prev) => prev +1)
  }

  return (
    <View className="flex-1 bg-[#FFF2F2] flex-direction-column justify-evenly gap-30 items-center">
      <Text className="text-black text-3xl">Focus</Text>

      <View key={trigger}>
        <CountdownCircleTimer
          isPlaying={isStart}
          duration={timer}
          size="250"
          colors={"#471515"}
          colorsTime={[7, 5, 2, 0]}
          onComplete={handleOnCompleteScope}
        >
          {({ remainingTime }) => (
            <TouchableOpacity onPress={() => setIsOpenModal(true)}>
              <Text className="text-5xl">
                {handleSecondToMinuesAndSeconds(remainingTime)}
              </Text>
            </TouchableOpacity>
          )}
        </CountdownCircleTimer>
      </View>
      <TouchableOpacity className="bg-white/40 px-3 py-1 rounded-3xl flex-row items-center gap-x-1.5 border" onPress={() => setIsOpenModal(true)}>
        <View className="w-2 h-2 rounded-full bg-orange-400"></View>
        <Text >{timePurpose}</Text>
      </TouchableOpacity>
      {
        !isStart ? <ButtonStart onPress={handleStartScope} /> : <ButttonCancel onPress={handleCancelScope} />
      }
      <FocusSettingModal
        setTimer={setTimer}
        setIsStart={setIsStart}
        setTrigger={setTrigger}
        visible={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        timer={timer}
        setTimePurpose={setTimePurpose}
        timePurpose={timePurpose}
      />
    </View>
  );
}
