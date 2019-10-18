import React from 'react';
import {Text, View} from 'react-native';

class LoginScreen extends React.Component {
  render() {
    console.log('this.props', this.props);
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text onPress={() => this.props.navigation.navigate('Home')}>Login!</Text>
      </View>
    );
  }
}

export default LoginScreen;
