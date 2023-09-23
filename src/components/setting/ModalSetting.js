import React, { useCallback, useState } from "react";
import {
  Image,
  Text,
  View,
  Switch,
  StyleSheet,
  Button,
  Pressable,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { XMarkIcon } from "react-native-heroicons/solid";
import Modal from "react-native-modal";

const ModalSetting = ({ open, setOpen }) => {
  const [isSoundEffect, setIsSoundEffect] = useState(false);
  const [isNotification, setIsNotification] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleSwitch = () =>
    setIsSoundEffect((previousState) => !previousState);
  const handleSaveSetting = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <Modal
      style={styles.modal}
      isVisible={open}
      animationIn={"slideInUp"}
      animationInTiming={400}
    >
      <View className="flex-1 items-center bg-[#FFF2F2]">
        <View className="w-full px-5 h-20 bg-[#471515]">
          <TouchableOpacity onPress={() => setOpen(false)} className="mt-10">
            <XMarkIcon color="white" size={30} />
          </TouchableOpacity>
        </View>

        <View className="w-11/12 relative flex items-center h-full mt-2">
          <Image
            source={{
              uri: "https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg=",
            }}
            className="mt-3"
            width="50%"
            height="20%"
            borderRadius="50%"
          />

          <Text className="mt-2 mb-2 text-base">user@gmail.com</Text>
          <View className="bg-white w-full flex items-center rounded-lg">
            <View className="border-b-[1px] border-slate-300 py-3  w-11/12  px-5 flex flex-row items-center justify-between">
              <Text className="text-xl">Sound Effect</Text>
              <Switch
                trackColor={{ false: "#767577", true: "#471515" }}
                thumbColor={isSoundEffect ? "#FFF2F2" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isSoundEffect}
              />
            </View>

            <View className="border-b-[1px] border-slate-300 py-3  w-11/12  px-5 flex flex-row items-center justify-between">
              <Text className="text-xl">Notification</Text>
              <Switch
                trackColor={{ false: "#767577", true: "#471515" }}
                thumbColor={isNotification ? "#FFF2F2" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => setIsNotification((prev) => !prev)}
                value={isNotification}
              />
            </View>

            <View className=" py-3  w-11/12  px-5 flex flex-row items-center justify-between">
              <Text className="text-xl">Theme</Text>
              <Switch
                trackColor={{ false: "#767577", true: "#471515" }}
                thumbColor={isDarkTheme ? "#FFF2F2" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => setIsDarkTheme((prev) => !prev)}
                value={isDarkTheme}
              />
            </View>
          </View>
          <Pressable
            onPress={handleSaveSetting}
            className="border"
            style={{
              position: "absolute",
              bottom: 130,
              backgroundColor: "white",
              width: 120,
              display: "flex",
              padding: 10,
              alignItems: "center",
            }}
          >
            {({ pressed }) => (
              <Text className="text-base">
                {pressed ? "Loading..!" : "Save"}
              </Text>
            )}
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  settingItem: {
    backgroundColor: "red",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  modal: {
    backgroundColor: "white",
    margin: 0, // This is the important style you need to set
    alignItems: undefined,
    justifyContent: undefined,
  },
});

export default ModalSetting;
