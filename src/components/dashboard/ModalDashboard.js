import React, { useCallback, useState } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { XMarkIcon } from "react-native-heroicons/solid";
import Modal from "react-native-modal";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

const PIE_CHART = [
  {
    name: "Seoul",
    population: 21500000,
    color: "rgba(131, 167, 234, 1)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Toronto",
    population: 2800000,
    color: "#F00",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Beijing",
    population: 527612,
    color: "red",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "New York",
    population: 8538000,
    color: "#ffffff",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Moscow",
    population: 11920000,
    color: "rgb(0, 0, 255)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
];

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 1, // optional, default 3
  barPercentage: 0.2,
  useShadowColorFromDataset: false, // optional
};

const commitsData = [
  { date: "2017-01-02", count: 1 },
  { date: "2017-01-03", count: 2 },
  { date: "2017-01-04", count: 3 },
  { date: "2017-01-05", count: 4 },
  { date: "2017-01-06", count: 5 },
  { date: "2017-01-30", count: 2 },
  { date: "2017-01-31", count: 3 },
  { date: "2017-03-01", count: 2 },
  { date: "2017-04-02", count: 4 },
  { date: "2017-03-05", count: 2 },
  { date: "2017-02-30", count: 4 },
];

const ModalDashboard = ({ open, setOpen }) => {
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
        <View className="w-[95%] mt-2">
          <Text className="text-base">Focused Time Distribution</Text>
          <LineChart
            data={{
              labels: ["January", "February", "March", "April", "May", "June"],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                  ],
                },
              ],
            }}
            width={Dimensions.get("window").width * 0.92} // from react-native
            height={220}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "#e26a00",
              backgroundGradientFrom: "#fb8c00",
              backgroundGradientTo: "#ffa726",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726",
              },
            }}
            bezier
            style={{
              display: "flex",
              alignItems: "center",
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </View>

        <View className="w-[95%] mt-2">
          <Text className="text-base">Focused Time Distribution</Text>
          <PieChart
            data={PIE_CHART}
            width={Dimensions.get("window").width * 0.92}
            height={200}
            chartConfig={{
              backgroundGradientFrom: "#1E2923",
              backgroundGradientFromOpacity: 0, 
              backgroundGradientTo: "#08130D",
              backgroundGradientToOpacity: 0.5,
              color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
              barPercentage: 0.5,
            }}
            accessor={"population"}
            backgroundColor={"transparent"}
            paddingLeft={"5"}
            // center={[10, 50]}
            // absolute
          />
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

export default ModalDashboard;
