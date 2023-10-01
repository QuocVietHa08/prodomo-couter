import React, { useState } from "react";
import { StyleSheet, Text, View, Switch } from "react-native";
import Modal from "react-native-modal";
import {
  BellSlashIcon,
  ClockIcon,
  FireIcon,
  BellAlertIcon,
} from "react-native-heroicons/solid";
import { TouchableOpacity } from "react-native-gesture-handler";

const ModalSettingHeader = ({ open, setOpen }) => {
  const [mode, setMode] = useState("focus");
  const [isDeepFocus, setIsDeepFocus] = useState(false);
  const [isCountExceededTime, setIsCountExceededTime] = useState(false);

  return (
    <Modal
      isVisible={open}
      animationIn="slideInDown"
      animationOut="slideOutDown"
      animationInTiming={400}
      animationOutTiming={400}
      style={styles.modalStyle}
      onBackdropPress={() => setOpen(false)}
    >
      <View className="flex-1 bg-red items-center justify-center rounded-xl">
        <View className="bg-white w-full h-full rounded-xl flex items-center justify-center">
          <View className="bg-[#FFF2F2] w-full h-1/3">
            <View className="flex flex-row justify-between items-center h-full bg-[#471515]">
              <Text className="text-white text-center w-1/3 font-medium">
                Timer
              </Text>
              <View className="w-1/3 flex justify-center items-center">
                <CustomeSwitch mode={mode} setMode={setMode} />
              </View>
              <Text className="text-white w-1/3 text-center font-medium">
                Stop watch
              </Text>
            </View>
          </View>
          <View className="h-1/3 border-b flex flex-row justify-evenly items-center border-slate-100 w-full">
            <View className="flex flex-row items-center gap-2">
              <FireIcon color="#471515" />
              <Text>Deep Focus</Text>
            </View>
            <Switch
              trackColor={{ false: "#767577", true: "#471515" }}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => setIsDeepFocus((prev) => !prev)}
              value={isDeepFocus}
            />
          </View>
          <View className="h-1/3 w-full flex flex-row justify-evenly items-center">
            <View className="flex flex-row items-center gap-2">
              <BellAlertIcon color="#471515" />
              <Text>Count exceeded Time</Text>
            </View>
            <Switch
              trackColor={{ false: "#767577", true: "#471515" }}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => setIsCountExceededTime((prev) => !prev)}
              value={isCountExceededTime}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalSettingHeader;

const CustomeSwitch = ({ mode, setMode }) => {
  return (
    <View className="flex flex-row justify-evenly items-center h-2/3 w-5/6 bg-white rounded-xl">
      <TouchableOpacity
        onPress={() => setMode("focus")}
        className="h-full flex items-center justify-center rounded"
      >
        <BellSlashIcon color={mode === "focus" ? "#471515" : "gray"} />
      </TouchableOpacity>
      <View>
        <Text>|</Text>
      </View>
      <TouchableOpacity
        onPress={() => setMode("time")}
        className="h-full flex items-center justify-center rounded"
      >
        <ClockIcon color={mode === "time" ? "#471515" : "gray"} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  modalStyle: {
    flex: 0,
    marginTop: 200,
    width: 300,
    height: 300,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
  },
});
