import {
  Body,
  Container,
  Content,
  Header,
  Left,
  List,
  ListItem,
  Right,
  Thumbnail,
  Title,
  Fab,
  IconNB,
  Button,
  Icon,
} from 'native-base';
import React, {Component} from 'react';
import {StyleSheet, Text, ScrollView, View} from 'react-native';
import {connect} from 'react-redux';
import {getUsersThunk} from '../../actions/users';
import {ParsedDateInd} from '../../utils/moment';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start', // if you want to fill rows left to right
  },
  item: {
    width: '100%', // is 50% of container width
  },
  mb: {
    marginBottom: 1,
  },
});

class ListUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFab: false,
    };
  }

  componentDidMount() {
    this.props.dispatch(getUsersThunk());
  }

  handleActive = () => {
    // console.log('asasa');
    this.setState(prevState => ({
      activeFab: !prevState.activeFab,
    }));
  };

  render() {
    const {getUsers} = this.props;
    const {activeFab} = this.state;

    console.log('this.state', this.state);
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>List Users</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View style={styles.container}>
            <View style={styles.item}>
              <List>
                {getUsers.map(v => {
                  return (
                    <ListItem key={v.id} avatar>
                      <Left>
                        <Thumbnail source={{uri: v.avatar}} />
                      </Left>
                      <Body>
                        <Text>{v.name}</Text>
                        <Text note>{v.email}</Text>
                      </Body>
                    </ListItem>
                  );
                })}
              </List>
            </View>
          </View>
        </Content>
        <Fab
          active={activeFab}
          direction="up"
          containerStyle={{}}
          style={{backgroundColor: '#5067FF'}}
          position="bottomRight"
          onPress={this.handleActive}>
          <Icon name="share" />
          <Button style={{backgroundColor: '#34A34F'}}>
            <Icon name="logo-whatsapp" />
          </Button>
          <Button style={{backgroundColor: '#3B5998'}}>
            <Icon name="logo-facebook" />
          </Button>
          <Button disabled style={{backgroundColor: '#DD5144'}}>
            <Icon name="mail" />
          </Button>
        </Fab>
      </Container>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 22,
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
// });

function mapStateToProps(state) {
  return {
    getUsers: state.getUsers.data,
  };
}

export default connect(mapStateToProps)(ListUsers);
