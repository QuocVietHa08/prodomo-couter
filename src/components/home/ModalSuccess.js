import { View, Text } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Modal from "react-native-modal";
import ScrollPicker from "react-native-wheel-scrollview-picker";

export default function ModalSucsesss({ open, onClose}) {
  
  return (
    <Modal isVisible={open}>
      <View className="flex-1 justify-center items-center">
        <View className="bg-white w-2/3 h-1/3 rounded-xl flex justify-center items-center gap-y-3">
          <View>
            <Text className="text-black text-3lx">Congratulation</Text>
          </View>

          <View className="flex-row justify-center gap-5">
            <TouchableOpacity
              onPress={() => onClose()}
              className="bg-[#FF4C4C] py-2 w-20 flex items-center justify-center rounded"
            >
              <Text className="text-white">Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
