import React, {Component} from 'react';
import {Container, Header, Content, Button, Text} from 'native-base';
import {View} from 'react-native';

export default class ButtonRoundedExample extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Container>
          <Header />
          <Content>
            <Button small rounded light>
              <Text>Light</Text>
            </Button>
          </Content>
        </Container>
      </View>
    );
  }
}
