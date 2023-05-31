import {
  View,
  Text,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Alert,
} from "react-native";

import { CustomButton } from "../../../components/CustomButton/CustomButton";
import { CustomInput } from "../../../components/CustomInput/CustomInput";

import { loginStyles } from "./LoginScreenStyle";
import { styles } from "../RegistrationScreen/RegistrationScreenStyle";

import { useState } from "react";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLoginPressed = () => {
    if (!email || !password) {
      return Alert.alert("All fields must be filled up");
    }
    const data = { email, password };

    console.log(data);
  };

  const onSignUpLinkPressed = () => {
    navigation.navigate("Registration");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../../assets/images/background.jpg")}
          style={styles.backgroundImage}
        >
          <View style={loginStyles.loginBox}>
            <Text style={styles.text}>Login</Text>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <CustomInput
                placeholder="Email address"
                value={email}
                setValue={setEmail}
              />
              <CustomInput
                placeholder="Password"
                value={password}
                setValue={setPassword}
                secureTextEntry
              />
            </KeyboardAvoidingView>
            <CustomButton text="Sign In" onPress={onLoginPressed} />
            <CustomButton
              text="Don't have an account? Create account"
              type="SECONDARY"
              onPress={onSignUpLinkPressed}
            />
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
