import React from "react";
import { StyleSheet, Text, View } from "react-native";

class TimerHeader extends React.Component {

  handleDisplay = () => {
    if (this.props.intervalType === "Working") {
      if (this.props.running === true) {
        return "YOU'RE DOING WELL. KEEP GOING!";
      } else {
        return "START WORKING WHEN READY.";
      }
    } else {
      if (this.props.running === true) {
        return "ENJOY YOUR WELL DESERVED BREAK.";
      } else {
        return "TIME TO RELAX NOW!";
      }
    }
  };
  render() {
    let texttoshow = this.handleDisplay();
    return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>
        {texttoshow}
        </Text>
        </View>);
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 16,
    fontWeight: "500",
    padding: 10,
    color: '#0000c8',
  },

  container: {
    borderRadius: 10, 
    padding: 5,
    alignItems: 'center',
    width: 300,
    height: 80,
    textAlign: 'center',

  },
});

export default TimerHeader;
