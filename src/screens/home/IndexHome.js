import React from 'react';
import {Text, View} from 'react-native';

class HomeScreen extends React.Component {
  render() {
    console.log('zzzzzzzzzzzzzzzz');
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home!</Text>
      </View>
    );
  }
}

export default HomeScreen;
