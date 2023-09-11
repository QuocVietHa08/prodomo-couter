import { View, Text, Button, Pressable, Image } from "react-native";
import React, { useEffect, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ModalRelaxing from "../components/timeEnd/ModalRelaxing";

export default function TimeEnd() {
  const [isOpen, setIsOpen] = useState(false);
  const [timeRelaxing, setTimeRelaxing] = useState(0);
  const [isStartRelaxing, setIsStartRelaxing] = useState(false);

  useEffect(() => {
    if (isStartRelaxing && timeRelaxing > 0) {
      setTimeout(() => {
        setTimeRelaxing((prev) => prev -1 )
      }, 1000)
    } else {

      setIsStartRelaxing(false);
      setTimeRelaxing(0)
    }
  }, [isStartRelaxing, timeRelaxing])

  const handleRelaxing = () => {
    setIsOpen(true);
  };

  const handleStartRelaxing = (time) => {
    setIsOpen(false)
    setTimeRelaxing(Number(time) * 60);
    setIsStartRelaxing(true)
  }
  
  const handleSecondToMinuesAndSeconds = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };
  return (
    <View className="flex-1 bg-[#FFF2F2] items-center justify-center gap-[70px]">
      {
        timeRelaxing > 0 ? (
          <View className="flex items-center">
            <Text>Break time left</Text>
            <Text>
              {handleSecondToMinuesAndSeconds(timeRelaxing)}
            </Text>
          </View>
        ) : (
       <View className="text-center flex items-center justify-center">
        <Text className="text-base">
          Congratulation, you complete 1 promodo
        </Text>
        <Text className="text-base">You are get closer to your goal</Text>
      </View>
   
        )
      }
            <Image
        source={require("../../assets/images/timeEnd/successImage.png")}
        style={{ width: hp(20), height: hp(20) }}
      />
      <Pressable
        onPress={handleRelaxing}
        className="bg-red-500/60 px-5 py-2 rounded mt-10"
      >
        <Text>Relaxing</Text>
      </Pressable>
      <ModalRelaxing onStartRelaxing={handleStartRelaxing} open={isOpen} onClose={() => setIsOpen(false)} />
    </View>
  );
}
