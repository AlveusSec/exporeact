import React, { Component, component } from "react";
import {View} from "react-native";
import LottieView from "lottie-react-native";

export default class Splash extends React.Component {
    constructor(props) {
        super();
        }

    render(){
return (
        <View
        style={{
            flex:1,
            backgroundColor: '#ff00ff'
        }}
        >
        <LottieView 
            source={require('./splashscreen.json')}
            autoPlay loop />
        </View>
        )
    }
}