import React from "react";
import { ScrollView, View, Text, Button, StyleSheet } from "react-native";

const ToDo = ({ text, idx, removeTodo, ...props }) => {
  // TO-DO: Could simplify this with function currying, but that seems to result
  // in wasted rendering, regardless
  const handleRemove = () => {
    removeTodo(idx);
  };

  return (
    <View style={styles.view}>
      <ScrollView
        horizontal
        contentContainerStyle={styles.contentContainer}>
        <Text style={styles.text}>
          {text}
        </Text>
        <Button
          style={styles.button}
          title="Remove"
          onPress={handleRemove}
        />
      </ScrollView>
	  </View>
  );
};

const styles = StyleSheet.create({
  view: {
    padding: 20,
    backgroundColor: "#EEE"
  },
  text: {
    flex: 1 // Set to 1 to take up all available space
  },
  contentContainer: {
    flex: 1,
  }
});

export default ToDo;
