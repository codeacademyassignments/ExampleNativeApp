import { View, Text } from 'react-native';
import React from 'react';
import DetailsStyle from './Details.style';

class Details extends React.Component {
  render() {
    return (
      <View style={DetailsStyle.greetingsView}>
        <Text style={DetailsStyle.greetingsText}>Welcome to React Native !!</Text>
      </View>
    );
  }
}

export default Details;
