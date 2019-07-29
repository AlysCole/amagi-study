import React from "react";
import {
	View,
	ScrollView,
	Text,
	Button,
  StyleSheet
} from "react-native";

import ToDo from "./ToDo";

const ToDoList = ({ todos, removeTodo, ...props }) => {
	return (
    <ScrollView style={styles.scrollView}>
      {/* NOTE: Index as keys may result in wasted/unnecessary rendering, because
        * React assumes each key is unique to the item. Re-work this to assign
        * UNIQUE keys */}
      {todos && todos.length > 0 && todos.map( (todo, idx) => (
        <ToDo text={todo} idx={idx} removeTodo={removeTodo} key={idx} />
      ))}
    </ScrollView>
	)
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1 // Setting this to 1 so that the ToDos will fill the width of the screen
  },
});

export default ToDoList;
