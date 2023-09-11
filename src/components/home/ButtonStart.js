import { View, Text, Pressable } from 'react-native'
import React from 'react'

export default function ButtonStart({ onPress }) {
  return (
    <Pressable
    onPress={onPress}
    className="bg-[#FF4C4C] py-2 w-40 flex items-center justify-center rounded"
    color="black"
  >
    <Text className="text-[#471515] font-bold text-2xl">Start</Text>
  </Pressable>
  )
}