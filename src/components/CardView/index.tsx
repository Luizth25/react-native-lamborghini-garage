import React from "react";
import { View, Text, Button, Image } from "react-native";

import Logo from "../../../assets/logo.png";

import { styles } from "./styles";
import Divider from "../Divider";

const CardView = () => {
  const renderLogoBox = () => (
    <View style={styles.logoContainer}>
      <Image style={styles.imageLogo} source={Logo} />
    </View>
  );

  const renderCarDetails = () => (
    <View style={{ alignItems: "center" }}>
      <Text style={styles.carBrand}>Lamborghini</Text>
      <Text style={styles.carName}>Model</Text>
    </View>
  );

  return (
    <View style={styles.imageContainer}>
      {renderLogoBox()}
      <Divider />
      {renderCarDetails()}
    </View>
  );
};

export default CardView;
