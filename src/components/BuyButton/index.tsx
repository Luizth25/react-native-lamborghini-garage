import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

import { styles } from "./styles";

const BuyButton = ({ carName }: { carName?: string }) => {
  const [isLoading, setIsLoading] = useState(false);

  const createTwoButtonAlert = () => {
    Alert.alert(
      "Deseja realizar a compra?",
      `Você tem certeza que deseja comprar ${carName}?`,
      [
        {
          text: "Comprar",
          onPress: () => {
            setIsLoading(true);
            setTimeout(() => {
              Alert.alert(
                "Parabéns 🎉",
                `Compra do ${carName} realizada com sucesso!!`
              );
              setIsLoading(false);
            }, 3000);
          },
        },
        {
          text: "Cancelar",
          onPress: () => null,
        },
      ]
    );
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          disabled={isLoading}
          onPress={createTwoButtonAlert}
          style={styles.button}
        >
          {isLoading ? (
            <ActivityIndicator size="large" color="#fff" />
          ) : (
            <>
              <AntDesign
                name="shoppingcart"
                size={24}
                color="white"
                style={styles.icon}
              />
              <Text style={styles.buttonText}>Comprar</Text>
            </>
          )}
        </TouchableOpacity>
      </View>
    </>
  );
};

export default BuyButton;
