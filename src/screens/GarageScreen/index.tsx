import React from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";
import { StatusBar } from "expo-status-bar";
import CardView from "../../components/CardView";

const GarageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cameraBox}>
        <View style={styles.triangleCorner}></View>
        <View style={[styles.triangleCorner, styles.topRight]}></View>
        <View style={[styles.triangleCorner, styles.bottomLeft]}></View>
        <View style={[styles.triangleCorner, styles.bottomRight]}></View>
        <CardView />
      </View>
      <StatusBar style="light" />
    </View>
  );
};
export default GarageScreen;
