import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

class TimerButtons extends React.Component {
  state = {};

  render() {
    if (this.props.running === true) {
      return (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.buttonPause}
            onPress={this.props.pause}
          >
            <Text style={styles.textPause}>PAUSE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonReset}
            onPress={this.props.reset}
          >
            <Text style={styles.textReset}>RESET</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.buttonStart}
            onPress={this.props.play}
          >
            <Text style={styles.textStart}>START</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  buttonStart: {
    alignItems: "center",
    backgroundColor: "#fdb913",
    padding: 15,
    borderRadius: 10,
    width: 120,
    textAlign: 'center',
    margin: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },

  textStart: {
    color: "black",
    fontSize: 16,
    fontWeight: "300",
  },

  buttonPause: {
    alignItems: "center",
    backgroundColor: "#fdb913",
    padding: 15,
    borderRadius: 10,
    width: 120,
    textAlign: 'center',
    margin: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },

  textPause: {
    color: "black",
    fontSize: 16,
    fontWeight: "300",
  },

  buttonReset: {
    alignItems: "center",
    backgroundColor: "lightgray",
    padding: 15,
    borderRadius: 10,
    width: 120,
    textAlign: 'center',
    margin: 5,
  },

  textReset: {
    color: "black",
    fontSize: 16,
    fontWeight: "300",
  },
  
});

export default TimerButtons;
