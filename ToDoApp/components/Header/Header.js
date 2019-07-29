import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = ({ children, ...props }) => {
  return (
    <View style={styles.view}>
      {children}
	  </View>
  )
};

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#BD9A71",
    height: 100,
  }
});

export default Header;
