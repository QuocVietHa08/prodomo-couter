import { View, Text } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Modal from "react-native-modal";
import ScrollPicker from "react-native-wheel-scrollview-picker";

export default function ModalRelaxing({ open, onClose, onStartRelaxing }) {
  const [restMinute, setResMinutes] = useState(1);
  const [toggle, setToggle] = useState(0)
  return (
    <Modal isVisible={open}>
      <View className="flex-1 justify-center items-center">
        <View className="bg-white w-2/3 h-1/3 rounded-xl flex justify-around items-center">
          <Text className="text-black text-base">
            Choose your time duration
          </Text>
          <View className="bg-red-400 h-1/3 w-full">
            <ScrollPicker
              dataSource={["1", "2", "3", "4", "5", "6"]}
              selectedIndex={restMinute}
              highlightBorderWidth={2}
              renderItem={(data, index, isSelected) => (
                <Text
                  className={`${
                    isSelected ? "text-black" : "text-slate-400"
                  } text-2xl w-full h-full text-center border`}
                >
                  {data}
                </Text>
              )}
              onValueChange={(data) => {
                setResMinutes(data)
                setToggle((prev) => prev +1)
              }}
              itemHeight={40}
              wrapperHeight={100}
              wrapperColor={"#cccccc"}
              highlightColor={"#d8d8d8"}
              style={{
                width: "100px",
                backgroundColor: "red",
              }}
            />
          </View>
          <View className="flex-row justify-center gap-5">
            <TouchableOpacity
              onPress={onClose}
              className="bg-[#FF4C4C] py-2 w-20 flex items-center justify-center rounded"
            >
              <Text className="text-white">Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onStartRelaxing(restMinute)}
              className="bg-[#FF4C4C] py-2 w-20 flex items-center justify-center rounded"
            >
              <Text className="text-white">Start</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
