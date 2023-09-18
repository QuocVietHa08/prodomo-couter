import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  SectionList,
  Pressable,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

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

const SECTIONS = [
  {
    title: "Made for you",
    data: [
      {
        key: "6",
        text: "5",
        duration: 5 * 60,
      },
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

const TIME_PURPOSE = [
  {
    title: "Time purpose",
    data: [
      {
        key: "1",
        text: "Work",
      },
      {
        key: "2",
        text: "Study",
      },

      {
        key: "3",
        text: "Other",
      },
      {
        key: "4",
        text: "Entertaiment",
      },
      {
        key: "5",
        text: "Social",
      },
    ],
  },
];

export default function FocusSettingModal({
  visible,
  setIsStart,
  onClose,
  timer,
  setTimer,
  setTrigger,
  setTimePurpose = { setTimePurpose },
  timePurpose,
}) {
  const handleOnSetTimePurpose = (purpose) => {
    setTimePurpose(purpose);
    onClose();
  };

  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View
        style={{
          height: "70%",
          marginTop: "auto",
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
                onClose();
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
                      onClose();
                      setIsStart(false);
                      setTrigger((prev) => prev + 1);
                    }}
                    item={item}
                  />
                );
              }}
            />
          </SafeAreaView>
          <View className="px-5 flex flex-row justify-between mt-3">
            <Text className="text-black text-base">
              Choose your time purpose
            </Text>
          </View>
          <SafeAreaView className="mt-4">
            <SectionList
              horizontal
              contentContainerStyle={{ paddingHorizontal: 10 }}
              stickySectionHeadersEnabled={false}
              showsHorizontalScrollIndicator={false}
              sections={TIME_PURPOSE}
              renderItem={({ item, section }) => {
                const isActive = item.text === timePurpose;
                return (
                  <TouchableOpacity
                    key={item.key}
                    onPress={() => handleOnSetTimePurpose(item.text)}
                    className={`${
                      isActive ? "bg-[#FFF2F2]" : "bg-gray-100"
                    } mx-2 rounded`}
                  >
                    <Text className="px-2 py-1">{item.text}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </SafeAreaView>
        </View>
      </View>
    </Modal>
  );
}
