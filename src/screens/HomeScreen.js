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
// import Modal from 'react-native-modal';

export default function HomeScreen() {
  const [timer, setTimer] = useState(25 * 60);
  const [isStart, setIsStart] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [trigger, setTrigger] = useState(0);

  const onStart = () => {
    setIsStart((prev) => !prev);
  };

  const handleSecondToMinuesAndSeconds = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

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
          onComplete={() => {
            setIsStart(false);
          }}
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

      <Pressable
        onPress={onStart}
        className="bg-[#FF4C4C] py-2 w-40 flex items-center justify-center rounded"
        color="black"
      >
        <Text className="text-[#471515] font-bold text-2xl">
          {isStart ? "Pause" : "Start"}
        </Text>
      </Pressable>

      <FocusSettingModal
        setTimer={setTimer}
        setIsStart={setIsStart}
        setTrigger={setTrigger}
        visible={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        timer={timer}
      />
    </View>
  );
}
