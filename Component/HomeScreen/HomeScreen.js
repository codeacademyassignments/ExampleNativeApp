import React from 'react';
import {
  Button, View, StyleSheet, Text,
} from 'react-native';
import PropTypes from 'prop-types';

const style = StyleSheet.create({
  outterMostView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewForTopButton: {
    width: 150,
    height: 50,
    backgroundColor: 'powderblue',
  },
  viewForMiddleButton: {
    width: 100,
    height: 50,
    backgroundColor: 'skyblue',
  },
  viewForBottomButton: {
    width: 150,
    height: 50,
    backgroundColor: 'steelblue',
  },
});


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  state = {
    reload: '',
  }

  onReload = () => () => {
    this.setState({ reload: 'loading..' });
    setTimeout(() => this.setState({ reload: 'Reloaded' }), 1000);
    setTimeout(() => this.setState({ reload: '' }), 2000);
  }

  render() {
    const { navigate } = this.props.navigation;
    const doNavigate = pageToNavigate => () => navigate(pageToNavigate);
    return (
      <View style={style.outterMostView}>
        <View style={style.viewForTopButton}>
          <Button onPress={doNavigate('Details')} title="Greetings" color="#841584" accessibilityLabel="Learn more about this purple button" />
        </View>
        <View style={style.viewForMiddleButton}>
          <Button onPress={doNavigate('PrintPizzas')} title="Explore" color="#841584" accessibilityLabel="Learn more about this purple button" />
        </View>
        <View style={style.viewForBottomButton}>
          <Button onPress={this.onReload()} title="Reload" color="#841584" accessibilityLabel="Learn more about this purple button" />
        </View>
        <Text>{this.state.reload}</Text>
      </View>
    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default HomeScreen;
