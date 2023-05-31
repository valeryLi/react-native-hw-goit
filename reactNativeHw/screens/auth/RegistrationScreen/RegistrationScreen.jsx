import * as ImagePicker from "expo-image-picker";

import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Alert,
} from "react-native";

import { styles } from "./RegistrationScreenStyle";

import { CustomInput } from "../../../components/CustomInput/CustomInput";
import { CustomButton } from "../../../components/CustomButton/CustomButton";

import { useState } from "react";

export const RegistrationScreen = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [password, setPassword] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const onSignUpPressed = () => {
    if (!login || !email || !password) {
      return Alert.alert("All fields must be filled up");
    }
    const data = { login, email, password };

    console.log(data);
  };

  const onLoginLinkPressed = () => {
    navigation.navigate("Login");
  };

  const imagePicker = async () => {
    if (image) {
      setImage(null);
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const passwordIsShown = () => {
    setShowPassword(!showPassword);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../../assets/images/background.jpg")}
          style={styles.backgroundImage}
        >
          <View style={styles.formBox}>
            <Image
              style={styles.avatarImg}
              source={
                image
                  ? { uri: image }
                  : require("../../../assets/images/plug.jpg")
              }
            />
            <TouchableOpacity
              style={styles.addBtn}
              onPress={() => {
                imagePicker();
              }}
            >
              <Image
                style={styles.addIcon}
                source={
                  image
                    ? require("../../../assets/images/remove.png")
                    : require("../../../assets/images/add.png")
                }
              />
            </TouchableOpacity>

            <Text style={styles.text}>Registration</Text>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <CustomInput
                placeholder="Login"
                value={login}
                setValue={setLogin}
                onFocus={() => {
                  setIsFocused(true);
                }}
                onBlur={() => {
                  setIsFocused(false);
                }}
              />
              <CustomInput
                placeholder="Email address"
                value={email}
                setValue={setEmail}
                keyboardType="email-address"
                onFocus={() => {
                  setIsFocused(true);
                }}
                onBlur={() => {
                  setIsFocused(false);
                }}
              />
              <CustomInput
                placeholder="Password"
                value={password}
                setValue={setPassword}
                secureTextEntry={showPassword}
                clearButtonMode="always"
                onFocus={() => {
                  setIsFocused(true);
                }}
                onBlur={() => {
                  setIsFocused(false);
                }}
              />
            </KeyboardAvoidingView>
            <TouchableOpacity onPress={passwordIsShown}>
              <Text>{showPassword ? "Show" : "Hide"}</Text>
            </TouchableOpacity>
            <CustomButton
              text="Sign Up"
              onPress={onSignUpPressed}
              type="PRIMARY"
            />

            <CustomButton
              text="Already have an account? Login"
              type="SECONDARY"
              onPress={onLoginLinkPressed}
            />
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
