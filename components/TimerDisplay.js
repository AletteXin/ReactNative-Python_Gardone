import React from "react";
import { StyleSheet, Text, View } from "react-native";

class TimerDisplay extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>
          {Math.floor(this.props.time / 60)
            .toString()
            .padStart(2, "0") +
            ":" +
            (this.props.time % 60).toString().padStart(2, "0")}
        </Text>
        <Text style={styles.textMin}>mins</Text>
      </View>
    );
  }
}

export default TimerDisplay;

const styles = StyleSheet.create({
  container: {
    marginBottom: "10%",
    padding: "10%",
    borderColor: "#fdb913",
    borderRadius: 300,
    borderWidth: 3,
    alignItems: "center",
    backgroundColor: "white",
    height: 250,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  textStyle: {
    color: "#0000c8",
    fontSize: 45,
    fontWeight: "400",
  },

  textMin: {
    fontStyle: 'italic',
    fontSize: 18,
  },

});
