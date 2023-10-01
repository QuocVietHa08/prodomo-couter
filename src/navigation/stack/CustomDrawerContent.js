import * as React from "react";
import { View, Text, Button, Modal } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import ModalSetting from "../../components/setting/ModalSetting";
import ModalDashboard from "../../components/dashboard/ModalDashboard";
import ModalGoal from "../../components/goal/ModalGoal";
import { toggleDrawer } from "../NavigationServices";

function CustomDrawerContent(props) {
  const [isOpenModalSetting, setIsOpenModalSetting] = React.useState(false);
  const [isOpenModalDashboard, setIsOpenModalDashboard] = React.useState(false);
  const [isOpenModalGoal, setIsOpenModalGoal] = React.useState(false);

  return (
    <DrawerContentScrollView {...props}>
      <ModalSetting open={isOpenModalSetting} setOpen={setIsOpenModalSetting} />
      <ModalDashboard
        open={isOpenModalDashboard}
        setOpen={setIsOpenModalDashboard}
      />
      <ModalGoal open={isOpenModalGoal} setOpen={setIsOpenModalGoal} />

      <DrawerItem
        label="Dashboard"
        labelStyle={{
          color: "#471515",
        }}
        onPress={() => {
          setIsOpenModalDashboard(true);
          toggleDrawer();
        }}
      ></DrawerItem>

      <DrawerItemList {...props} />
      <DrawerItem
        label="Setting"
        labelStyle={{
          color: "#471515",
        }}
        onPress={() => {
          setIsOpenModalSetting(true);
          toggleDrawer();
        }}
      ></DrawerItem>

      <DrawerItem
        label="Goals"
        labelStyle={{
          color: "#471515",
        }}
        onPress={() => {
          setIsOpenModalGoal(true);
          toggleDrawer();
        }}
      ></DrawerItem>
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;
