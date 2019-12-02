import React from 'react';
import {Root} from 'native-base';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Provider} from 'react-redux';
import HomeScreen from './src/pages/home/IndexHome';
import FlexDirectionBasics from './src/pages/learn-flexbox/IndexFlexbox';
import FlatListBasics from './src/pages/list-users/IndexListUsers';
import LoginScreen from './src/pages/login/IndexLogin';
import configureStore from './src/store/configStore';

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  ListUsers: FlatListBasics,
});

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        title: 'Login',
        // headerTintColor: '#fff',
        header: null,
      },
    },
    Home: {
      screen: TabNavigator,
      navigationOptions: {
        header: null,
      },
    },
    ListUsers: {
      screen: FlatListBasics,
      navigationOptions: {
        header: null,
      },
    },
    FlexBoxLearn: {
      screen: FlexDirectionBasics,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Home',
  },
);

let Navigation = createAppContainer(AppNavigator);

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Root>
        <Provider store={store}>
          <Navigation />
        </Provider>
      </Root>
    );
  }
}
