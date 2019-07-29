/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Moo,
  Button
} from "react-native";

import Header from "../components/Header/Header";
import ToDoList from "../components/ToDo/ToDoList";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [], // set the initial todo list
    }
  }

  addTodo = (todo) => {
    this.setState( (state) => {
      return {
        todos: [ ...state.todos, "Do me!" ]
      };
    });
  }

  removeTodo = (key) => {
    // use function version of setState() to get the current state
    this.setState( (state) => {
      // return a new array with the todo of index "key" filtered out
      return {
        todos: state.todos.filter(
          (todo, idx) => idx !== key
        )
      };
    });
  }

  render() {
    const { todos } = this.state;
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
          >
            <Header>
              <Text style={styles.header}>
                Your Todos
              </Text>
              <Button title="Add a ToDo" onPress={this.addTodo} />
            </Header>
            <ToDoList todos={todos} removeTodo={this.removeTodo} />
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
    
  }
};

const styles = StyleSheet.create({
  header: {
    fontSize: 30
  }
});

export default Home;
