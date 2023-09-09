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
// import Modal from 'react-native-modal';
const ListItem = ({ item, isActive, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        className={`${
          isActive ? "bg-[#FFF2F2]" : "bg-gray-100"
        } w-6 h-6 mx-4 flex items-center justify-center rounded`}
      >
        <Text className="text-black text-xs">{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default function HomeScreen() {
  const [timer, setTimer] = useState(25 * 60);
  const [isStart, setIsStart] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [trigger, setTrigger] = useState(0);

  const SECTIONS = [
    {
      title: "Made for you",
      data: [
        {
          key: "1",
          text: "10",
          duration: 10 * 60,
        },
        {
          key: "2",
          text: "15",
          duration: 15 * 60,
        },

        {
          key: "3",
          text: "20",
          duration: 20 * 60,
        },
        {
          key: "4",
          text: "25",
          duration: 25 * 60,
        },
        {
          key: "5",
          text: "30",
          duration: 30 * 60,
        },
      ],
    },
  ];

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
          colors={"#471515"}
          colorsTime={[7, 5, 2, 0]}
        >
          {({ remainingTime }) => (
            <TouchableOpacity onPress={() => setIsOpenModal(true)}>
              <Text className="text-3xl">
                {handleSecondToMinuesAndSeconds(remainingTime)}
              </Text>
            </TouchableOpacity>
          )}
        </CountdownCircleTimer>
      </View>

      <Pressable
        onPress={onStart}
        className="bg-[#FF4C4C] py-2  w-32 flex items-center justify-center rounded"
        color="black"
      >
        <Text className="text-[#471515] font-bold">
          {isStart ? "Pause" : "Start"}
        </Text>
      </Pressable>

      <Modal animationType="slide" transparent={true} visible={isOpenModal}>
        <View
          style={{
            height: "70%",
            marginTop: "auto",
            backgroundColor: "blue",
          }}
        >
          <View className="flex-1 bg-white bottom-0 left-0 right-0 z-[10]">
            <View className="px-5 flex flex-row justify-between mt-3">
              <Text className="text-black text-base">
                Choose your time duration
              </Text>
              <TouchableOpacity
                className="bg-[#471515] p-1 px-3 rounded"
                onPress={() => {
                  setIsOpenModal(false);
                }}
              >
                <Text className="text-white  text-base">Close</Text>
              </TouchableOpacity>
            </View>
            <SafeAreaView className="mt-4">
              <SectionList
                horizontal
                contentContainerStyle={{ paddingHorizontal: 10 }}
                stickySectionHeadersEnabled={false}
                sections={SECTIONS}
                renderItem={({ item, section }) => {
                  return (
                    <ListItem
                      isActive={timer === item.duration}
                      onPress={() => {
                        setTimer(item.duration);
                        setIsOpenModal(false);
                        setIsStart(false);
                        setTrigger((prev) => prev + 1)
                      }}
                      item={item}
                    />
                  );
                }}
              />
            </SafeAreaView>
          </View>
        </View>
      </Modal>
    </View>
  );
}
