import React from 'react';
import {Text, View, Button} from 'react-native';
import {Provider} from 'react-redux';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import FlatListBasics from './src/pages/list-users/IndexListUsers';
import configureStore from './src/store/configStore';
import LoginScreen from './src/pages/login/IndexLogin';
import HomeScreen from './src/pages/home/IndexHome';

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Settings: SettingsScreen,
    ListUsers: FlatListBasics,
  },
  {
    initialRouteName: 'Login',
  },
);

const AppNavigator = createStackNavigator(
  {
    Splash: {
      screen: SplashScreen,
      navigationOptions: {
        header: null,
      },
    },
    Welcome: {
      screen: WelcomeScreen,
      navigationOptions: {
        header: null,
      },
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        title: 'Login',
        headerStyle: {
          backgroundColor: Color.grey01,
          elevation: 0,
          marginTop: 24,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          width: '72%',
          textAlign: 'center',
        },
      },
    },
    Register: {
      screen: RegisterScreen,
      navigationOptions: {
        title: 'Register',
        headerStyle: {
          backgroundColor: Color.grey01,
          elevation: 0,
          marginTop: 24,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          width: '72%',
          textAlign: 'center',
        },
      },
    },
    App: {
      screen: bottomNavigator,
      navigationOptions: {
        header: null,
      },
    },
    NowPlaying: {
      screen: NowPlayingScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Splash',
  },
);
let Navigation = createAppContainer(TabNavigator);

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
