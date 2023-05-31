import { Text, Pressable } from "react-native";
import React from "react";
import { styles } from "./CustomButtonStyle";

export const CustomButton = ({ onPress, text, type = "PRIMARY" }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, styles[`container_${type}`]]}
    >
      <Text style={[styles.textBtn, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  );
};
