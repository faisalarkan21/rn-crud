import React from 'react';
import {Linking} from 'react-native';
import {withNavigation} from 'react-navigation';
import {connect} from 'react-redux';
import {Button, Item, Icon, Input, View, Text} from 'native-base';
import {Color} from '../../assets/styles/Color';
import {logRegStyles} from '../../assets/styles/logRegStyles';
import {postLoginThunk} from '../../actions/auth';

class ScreenLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'faisal@stockbit.com',
      password: 'test123',
    };
  }

  onChangeText = (id, value) => {
    console.log('e', id, value);
    this.setState({
      [id]: value,
    });
  };

  componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps);
    // if (nextProps.dataAuth.isValid) {
    //   console.log('masukkk');
    //   this.props.navigation.navigate('Home');
    // }
  }

  handleSubmit = () => {
    /**
     * @TODO
     * this.props.dispatch(postLoginThunk({email: 'faisalarkan21@gmail.com', password: '123'}))
     */
    this.props.dispatch(postLoginThunk({...this.state}));
  };

  render() {
    console.log('state', this.props);
    return (
      <View style={loginStyle.loginWrapper}>
        {/* <View style={loginStyle.loginContainer}>
          <Button rounded style={loginStyle.btnFacebbok}>
            <Text style={loginStyle.txtFb}>Login With Facebook</Text>
          </Button>
        </View> */}
        {/* <Text style={loginStyle.txtOr}>Or</Text> */}
        <View style={loginStyle.formLogin}>
          <Item style={loginStyle.item}>
            <Icon name="ios-person" style={loginStyle.icon} />
            <Input
              value={this.state.email}
              id="email"
              onChangeText={e => this.onChangeText('email', e)}
              style={loginStyle.txtWhite}
              placeholderTextColor="#ffffff"
              placeholder="Email or username"
            />
          </Item>
          <Item style={loginStyle.item}>
            <Icon name="ios-lock" style={loginStyle.icon} />
            <Input
              value={this.state.password}
              id="password"
              onChangeText={e => this.onChangeText('password', e)}
              style={loginStyle.txtWhite}
              secureTextEntry={true}
              placeholderTextColor="#ffffff"
              placeholder="Password"
            />
          </Item>
        </View>
        <View style={loginStyle.btnLoginWrapper}>
          <Button
            onPress={this.handleSubmit}
            rounded
            style={loginStyle.btnLogin}>
            <Text style={loginStyle.txtLogin}>Login In</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const loginStyle = {
  loginWrapper: {
    flex: 1,
    height: '100%',
    backgroundColor: Color.black,
  },
  loginContainer: {
    alignSelf: 'center',
  },
  btnFacebbok: {
    width: 320,
    top: 20,
    justifyContent: 'center',
  },
  txtWhite: {
    color: 'white',
  },
  txtLogin: {
    color: 'white',
    width: 250,
    textAlign: 'center',
  },
  txtOr: {
    color: 'white',
    alignSelf: 'center',
    fontWeight: '100',
    fontSize: 12,
    top: 20,
    marginVertical: 30,
  },
  formLogin: {
    alignSelf: 'center',
    width: '80%',
    backgroundColor: 'transparent',
    top: 150,
  },
  btnLoginWrapper: {
    alignSelf: 'center',
    marginTop: 180,
  },
  btnLogin: {
    backgroundColor: Color.green,
    width: 250,
    justifyContent: 'center',
  },
  icon: {
    color: 'white',
  },
};

function mapStateToProps(state) {
  return {
    dataAuth: state,
  };
}

export default withNavigation(connect(mapStateToProps)(ScreenLogin));
