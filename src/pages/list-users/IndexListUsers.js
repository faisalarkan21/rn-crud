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
      active: false,
    };
  }

  componentDidMount() {
    this.props.dispatch(getUsersThunk());
  }

  handleActive = () => {
    console.log('asasa');
  };

  render() {
    const {getUsers} = this.props;
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
                      {/* <Right>
                        <Text note>{ParsedDateInd(v.createdAt)}</Text>
                      </Right> */}
                    </ListItem>
                  );
                })}
              </List>
            </View>
          </View>
        </Content>
        <View style={{flex: 1}}>
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{}}
            style={{backgroundColor: '#5067FF'}}
            position="bottomRight"
            onPress={this.handleActive}>
            <IconNB name="add-user" />
          </Fab>
        </View>
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
