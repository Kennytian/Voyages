import React, { Component } from 'react';
import { Button, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { isDiff } from './utils/object-diff';
import NavigationService from './routes/navigation-service';
// import * as RNLocalize from "react-native-localize";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

interface Props {}

interface State {
  text: string;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    paddingTop: 50,
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
    width: '50%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  reversedText: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default class Home extends Component<Props, State> {
  state = {
    text: '',
  };

  private reverseText = (text: string): string => {
    return text
      .split('')
      .reverse()
      .join('');
  };

  shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean {
    return isDiff(this.props, nextProps, this.state, nextState);
  }

  goToDetail = () => {
    NavigationService.navigate('Detail');
  };

  render() {
    // console.log(RNLocalize.getLocales());
    // console.log(RNLocalize.getCurrencies());
    const { text } = this.state;
    return (
      <View style={styles.container}>
        <Text testID="welcome" style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>To get started, edit App.tsx</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <TouchableOpacity testID="MyUniqueId123">
          <Text>Some button</Text>
        </TouchableOpacity>
        <TouchableOpacity testID="hello_button">
          <Text>Hello!!!</Text>
        </TouchableOpacity>
        <TouchableOpacity testID="world_button">
          <Text>World!!!</Text>
        </TouchableOpacity>
        <Text>Type some stuff below</Text>
        <TextInput
          testID="textInput"
          value={text}
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={text => this.setState({ text })}
        />
        <Text>The above but reversed: {'\n'}</Text>
        <Text testID="reversedText" style={styles.reversedText}>
          {this.reverseText(text)}
        </Text>
        <Button testID="goToDetailButton" title="Go to Details" onPress={this.goToDetail} />
      </View>
    );
  }
}
