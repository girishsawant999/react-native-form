import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import FormScreen from "./Components/FormScreen";
import ListScreen from "./Components/ListScreen";
import { StyleSheet, View, Platform } from "react-native";
import Constants from "expo-constants";

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="form-screen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="form-screen" component={FormScreen} />
          <Stack.Screen name="list-screen" component={ListScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
    backgroundColor: "#fff",
    color: "#000",
  },
});
