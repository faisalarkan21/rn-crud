import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Text,
} from 'native-base';
export default class FooterTabsExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRoutes: '',
    };
  }

  handlePushRoute = pushRoutes => {
    if (pushRoutes === 'Home') {
      this.setState({activeRoutes: 0}, () => {
        this.props.navigation.navigate(pushRoutes);
      });
    } else if (pushRoutes === 'ListUsers') {
      this.setState({activeRoutes: 1}, () => {
        this.props.navigation.navigate(pushRoutes);
      });
    }
  };

  render() {
    const {
      navigation: {
        state: {index: indexRoutes},
      },
    } = this.props;

    const {activeRoutes} = this.state;

    console.log(
      'indexRoutes ::->',
      indexRoutes,
      'activeRoutes ::->',
      activeRoutes,
    );

    return (
      <Footer>
        <FooterTab>
          <Button
            active={indexRoutes === activeRoutes ? true : false}
            onPress={() => this.handlePushRoute('Home')}>
            <Text>Home</Text>
          </Button>
          <Button
            active={indexRoutes === activeRoutes ? true : false}
            onPress={() => this.handlePushRoute('ListUsers')}>
            <Text>List Users</Text>
          </Button>
          <Button
            active={indexRoutes === activeRoutes ? true : false}
            onPress={() => this.handlePushRoute('Profile')}>
            <Text>Profile</Text>
          </Button>
          <Button
            active={indexRoutes === activeRoutes ? true : false}
            onPress={() => this.handlePushRoute('Setting')}>
            <Text>Setting</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
