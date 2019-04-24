import React, {Component} from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import * as RNLocalize from "react-native-localize";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

interface Props {}

interface State {
  text: string;
}

export default class App extends Component<Props, State> {
  state = {
    text: "",
  };

  render() {
    console.log(RNLocalize.getLocales());
    console.log(RNLocalize.getCurrencies());
    const { text } = this.state;
    return (
      <View style={styles.container}>
        <Text testID={'welcome'} style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.tsx</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <TouchableOpacity testID='MyUniqueId123'>
          <Text>Some button</Text>
        </TouchableOpacity>
        <TouchableOpacity testID='hello_button'>
          <Text>Hello!!!</Text>
        </TouchableOpacity>
        <TouchableOpacity testID='world_button'>
          <Text>World!!!</Text>
        </TouchableOpacity>
        <Text>Type some stuff below</Text>
        <TextInput
          testID="textInput"
          value={text}
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={(text) => this.setState({ text })}
        />
        <Text>The above but reversed: {"\n"}</Text>
        <Text testID="reversedText" style={styles.reversedText}>
          {this.reverseText(text)}
        </Text>
      </View>
    );
  }

  private reverseText = (text: string): string => {
    return text.split("").reverse().join("");
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    marginTop: 50,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textInput: {
    width: "50%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginLeft: "auto",
    marginRight: "auto",
  },
  reversedText: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});
