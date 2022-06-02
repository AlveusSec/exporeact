import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';



export default class App extends React.Component {
  animation: any;
  componentDidMount() {
    this.animation.play();
    // Or set a specific startFrame and endFrame with:
    this.animation.play(0, 500);
  }

  render() {
    return (
      <LottieView
      
        ref={animation => {
          this.animation = animation;
        }}
        source={require('../Niceproj/assets/splashscreen/test.json')}
        autoPlay loop
        resizeMode='contain'
      />
    );
  }
}