import React, { useEffect, useState } from "react";
import { View, Text, Button, TouchableOpacity, Pressable } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import moment from 'moment';

export default function HomeScreen() {
  const [timer, setTimer] = useState(25 * 60);
  const [isStart, setIsStart] = useState(false);

  // useEffect(() => {
  //   if (isStart && timer > 0) {
  //     setTimeout(() => {
  //       setTimer((prev) => prev - 1)
  //     }, 1000)
  //   } else {
  //     setIsStart(false);
  //     setTimer(25 * 60)
  //   }
  // }, [timer, isStart])

  const onStart = () => {
    setIsStart((prev) => !prev);
  };
  
  return (
    <View className="flex-1 flex-direction-column justify-evenly gap-30 items-center">
      <Text className="text-black text-3xl">Promodoro App</Text>

      <CountdownCircleTimer
        isPlaying={isStart}
        duration={timer}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[7, 5, 2, 0]}
      >
        {({ remainingTime }) => <Text>
          {/* {moment(remainingTime).format('mm:ss')} */}
            {remainingTime}
          </Text>}
      </CountdownCircleTimer>

      <Pressable
        onPress={onStart}
        className="bg-red-500 py-2  w-32 flex items-center justify-center rounded"
        // title={isStart ? "Pause" : "Start"}
        color="black"
      >
        <Text className="text-white">{isStart ? "Pause" : "Start"}</Text>
      </Pressable>
    </View>
  );
}
