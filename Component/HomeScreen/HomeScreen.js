import React from 'react';
import {
  Button, View, Text,
} from 'react-native';
import PropTypes from 'prop-types';
import HomeScreenStyle from './HomeScreen.style';


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
      <View style={HomeScreenStyle.outterMostView}>
        <View style={HomeScreenStyle.viewForTopButton}>
          <Button onPress={doNavigate('Details')} title="Greetings" color="#841584" accessibilityLabel="Learn more about this purple button" />
        </View>
        <View style={HomeScreenStyle.viewForMiddleButton}>
          <Button onPress={doNavigate('PrintPizzas')} title="Explore" color="#841584" accessibilityLabel="Learn more about this purple button" />
        </View>
        <View style={HomeScreenStyle.viewForBottomButton}>
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
