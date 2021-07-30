import React from "react";
import { Platform, StyleSheet, View, Image } from "react-native";
import TimerHeader from "./TimerHeader";
import TimerDisplay from "./TimerDisplay";
import TimerButtons from "./TimerButtons";
import { Vibration } from "react-native";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false,
      time: this.props.period * 60,
    };
  }

  componentDidUpdate(nextProps) {
    this.setState({ running: false, time: nextProps.period * 60 });
    if (this.state.running === true && this.state.time == 0) {
      this.handlePlay();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TimerHeader
          running={this.state.running}
          intervalType={this.props.intervalType}
        />
        <TimerDisplay time={this.state.time} />
        <View style={styles.picture}>
          <Image source={require('../assets/Snail.png')} style={styles.picture} />
        </View>
        <TimerButtons
          play={this.handlePlay}
          pause={this.handlePause}
          reset={this.handleReset}
          running={this.state.running}
        />

      </View>
    );
  }

  componentDidUpdate() {
    if (this.state.running === true && this.state.time == 0) {
      clearInterval(this.timerId);
      Vibration.vibrate([500, 500, 500]);
      this.props.Oncomplete();
    } else if (this.state.running === false) {
      clearInterval(this.timerId);
    }
  }

  handlePlay = () => {
    this.setState({
      running: true,
    });
    this.timerId = setInterval(() => {
      this.setState({
        time: this.state.time - 1,
      });
    }, 1000);
  };

  handlePause = () => {
    clearInterval(this.timerId);
    this.setState({
      running: false,
    });
  };

  handleReset = () => {
    clearInterval(this.timerId);
    this.setState({
      running: false,
      time: this.props.period * 60,
    });
  };
}

export default Timer;

const styles = StyleSheet.create({
  textStyle: {
    color: "#2b6ac2",
    fontSize: 25,
    fontWeight: "500",
    letterSpacing: 1.5,
    fontFamily: Platform.OS == "android" ? "notoserif" : "system",
    marginTop: 40,
    padding: 20,
  },

  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: '5%',
    margin: '5%',
    borderRadius: 15,
  },

  picture: {
    height: 95,
    width: 130,
    marginTop: '-20%',
    marginRight: '-30%',
  }
});
