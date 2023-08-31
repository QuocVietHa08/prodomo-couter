import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc'

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-black">
      <TouchableOpacity className="bg-teal-500 rounded-lg p-3 shadow-md shadow-gray-400">
        <Text className="text-white text-3xl font-bold">Hello world</Text>
      </TouchableOpacity>
      <StatusBar style="light" />
    </View>
  );
}
