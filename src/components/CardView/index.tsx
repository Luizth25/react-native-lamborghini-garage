import React, { useEffect, useState } from "react";
import { View, Text, Button, Image } from "react-native";

import { CAR_ASSETS_BASE_URL } from "../../constants/car";

import { LoadCarData, handleNextItem, handlePreviousItem } from "./actions";

import Logo from "../../../assets/logo.png";

import Divider from "../Divider";
import BuyButton from "../BuyButton";

import { TCarModel } from "./types";
import { styles } from "./styles";

const CardView = () => {
  const [carData, setCarData] = useState<TCarModel | null>(null);

  useEffect(() => {
    LoadCarData(1, setCarData);
  }, []);

  const renderLogoBox = () => (
    <View style={styles.logoContainer}>
      <Image style={styles.imageLogo} source={Logo} />
    </View>
  );

  const renderCarImage = () => (
    <Image
      style={styles.image}
      source={{
        uri: `${CAR_ASSETS_BASE_URL}/${carData?.id}.png`,
      }}
    />
  );

  const renderCarDetails = () => (
    <View style={{ alignItems: "center" }}>
      <Text style={styles.carBrand}>Lamborghini</Text>
      <Text style={styles.carName}>{carData?.carName}</Text>
    </View>
  );

  const renderPriceControls = () => (
    <View style={styles.priceLabelContainer}>
      <Button
        title="<"
        color={"#01A6B3"}
        onPress={() => handlePreviousItem([carData, setCarData])}
      />
      <Text style={styles.priceLabel}>{carData?.price}</Text>
      <Button
        title=">"
        color={"#01A6B3"}
        onPress={() => handleNextItem([carData, setCarData])}
      />
    </View>
  );

  return (
    <View style={styles.imageContainer}>
      {renderLogoBox()}
      <Divider />
      {renderCarDetails()}
      {renderCarImage()}
      <Divider />
      <BuyButton />
      {renderPriceControls()}
    </View>
  );
};

export default CardView;
