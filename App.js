import React from 'react';
import {Root} from 'native-base';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Provider} from 'react-redux';
import HomeScreen from './src/screens/home/IndexHome';
import FlexDirectionBasics from './src/screens/learn-flexbox/IndexFlexbox';
import FlatListBasics from './src/screens/list-users/IndexListUsers';
import LoginScreen from './src/screens/login/IndexLogin';
import configureStore from './src/store/configStore';
import FooterTabsExample from './src/screens/bottom-tab-nav/ButtomTab';

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    ListUsers: FlatListBasics,
  },
  {
    // tabBarOptions: {
    //   // style: {
    //   //   marginBottom: 15,
    //   // },
    //   labelStyle: {
    //     fontSize: 13,
    //     marginBottom: 13,
    //   },
    // },
    tabBarComponent: FooterTabsExample,
    initialRouteName: 'Home',
  },
);

// const AppNavigator = createStackNavigator(
//   {
//     Login: {
//       screen: LoginScreen,
//       navigationOptions: {
//         title: 'Login',
//         // headerTintColor: '#fff',
//         header: null,
//       },
//     },
//     Home: {
//       screen: HomeScreen,
//       navigationOptions: {
//         header: null,
//       },
//     },
//     ListUsers: {
//       screen: FlatListBasics,
//       navigationOptions: {
//         header: null,
//       },
//     },
//     FlexBoxLearn: {
//       screen: FlexDirectionBasics,
//       navigationOptions: {
//         header: null,
//       },
//     },
//   },
//   {
//     initialRouteName: 'Home',
//   },
// );

let Navigation = createAppContainer(TabNavigator);

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
