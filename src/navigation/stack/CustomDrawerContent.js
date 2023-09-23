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
import { toggleDrawer } from '../NavigationServices';

function CustomDrawerContent(props) {
  const [isOpenModalSetting, setIsOpenModalSetting] = React.useState(false);

  return (
    <DrawerContentScrollView {...props}>
      <ModalSetting open={isOpenModalSetting} setOpen={setIsOpenModalSetting} />
      <DrawerItemList {...props} />
      <DrawerItem
        label="Setting"
        labelStyle={{
          color: '#471515'
        }} 
        onPress={() => {
          setIsOpenModalSetting(true);
          toggleDrawer();
        }}
      ></DrawerItem>
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;
