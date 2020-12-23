import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function TopHeader() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0ff",
    flexDirection: "row",
    alignItems: "center",
  },
});
