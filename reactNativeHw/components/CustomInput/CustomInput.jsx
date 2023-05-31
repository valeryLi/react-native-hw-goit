import { View, TextInput } from "react-native";
import React from "react";
import { styles } from "./CustomInputStyle";

export const CustomInput = ({
  value,
  setValue,
  placeholder,
  secureTextEntry,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputText}
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#BDBDBD"
        cursorColor={"transparent"}
      />
    </View>
  );
};
