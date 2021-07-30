import React from "react";
import { Platform, StyleSheet, Text, View, TextInput, KeyboardAvoidingView } from "react-native";
import Timer from "./Timer";

class PomodoroTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workTime: 25,
      breakTime: 5,
      intervalType: "Working",
    };
  }

  handleTimerCompleted = () => {
    if (this.state.intervalType === "Working") {
      this.setState({
        intervalType: "Break",
      });
    } else {
      this.setState({
        intervalType: "Working",
      });
    }
  };

  handleWorkTime = (text) => {
    if (text >= 0) {
      this.setState({
        workTime: text,
      });
    } else {
      alert("Time invalid. Setting value to default. Please enter valid time");
      this.setState({
        workTime: 25,
      });
    }
  };

  handleBreakTime = (text) => {
    if (text >= 0) {
      this.setState({
        breakTime: text,
      });
    } else {
      alert("Time invalid. Setting value to default. Please enter valid time");
      this.setState({
        breakTime: 5,
      });
    }
  };

  handleTime = () => {
    if (this.state.intervalType === "Working") {
      return this.state.workTime;
    } else {
      return this.state.breakTime;
    }
  };


  render() {
    let time = this.handleTime();
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 80 : 0

    return (
      <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>
        <Timer
          intervalType={this.state.intervalType}
          Oncomplete={this.handleTimerCompleted}
          period={time}
          style={styles.container}
        />
        <Text style={styles.settingsText} >SETTINGS</Text>
        <View style={styles.row}>
          <View style={styles.inputWrap}>
            <Text style={styles.textStyle}>WORK TIME</Text>
            <TextInput
              style={styles.inputStyle}
              keyboardType={"numeric"}
              defaultValue={"" + this.state.workTime}
              placeholder="25"
              onChangeText={this.handleWorkTime}
            />
            <Text style={styles.textStyle}>mins</Text>
          </View>
          <View style={styles.inputWrap}>
            <Text style={styles.textStyle}>BREAK TIME</Text>
            <TextInput
              style={styles.inputStyle}
              keyboardType={"numeric"}
              defaultValue={"" + this.state.breakTime}
              placeholder="5"
              onChangeText={this.handleBreakTime}
            />
            <Text style={styles.textStyle}>mins</Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
export default PomodoroTimer;

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  row: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: '2%',
  },

  inputWrap: {
    flex: 1,
    marginHorizontal: '2%',
    borderRadius: 20,
    backgroundColor: 'lightgray',
    padding: 20,
  },
  
  textStyle: {
    fontSize: 16,
    fontWeight: "500",
    paddingBottom: 5,
    color: 'gray', 
  },

  inputStyle: {
    fontSize: 22,
    color: 'black',
    backgroundColor: 'white',
    padding: 3,
    marginVertical: 5,
    borderRadius: 10,
  },

  settingsText: {
    marginVertical: '2%',
    marginHorizontal: '5%',
    fontSize: 16,
    fontWeight: "500",
  },

});

