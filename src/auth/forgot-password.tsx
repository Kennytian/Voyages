import React, { PureComponent } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class ForgotPasswordScreen extends PureComponent<any, any> {
  render() {
    return (
      <View style={styles.container}>
        <Text>ForgotPassword Screen</Text>
        <Button
          testID="goToDetailAgain"
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Detail')}
        />
        <Button testID="goToHomeButton" title="Go to Home" onPress={() => this.props.navigation.navigate('Home')} />
        <Button testID="goBackButton" title="Go back" onPress={() => this.props.navigation.goBack()} />
      </View>
    );
  }
}
