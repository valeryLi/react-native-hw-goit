import { React, useEffect, useState, useCallback } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import * as Font from "expo-font";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";

import { StyleSheet, View, Text } from "react-native";

import { RegistrationScreen } from "./screens/auth/RegistrationScreen/RegistrationScreen.jsx";
import { LoginScreen } from "./screens/auth/LoginScreen/LoginScreen.jsx";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
          "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
          "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
        });
      } catch (error) {
        console.warn(error);
      } finally {
        setIsReady(true);
        onLayoutRootView();
      }
    }
    loadFonts();
  }, []);

  const MainStack = createStackNavigator();

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <MainStack.Navigator
          initialRouteName="Login"
          onLayout={onLayoutRootView}
        >
          <MainStack.Screen
            name="Registration"
            component={RegistrationScreen}
            options={{ headerShown: false }}
          />
          <MainStack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          {/* <MainStack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          /> */}
        </MainStack.Navigator>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
