import { View, Text } from 'react-native';
import React from 'react';

class Details extends React.Component {
  render() {
    return (
      <View style={{ flex: 2, alignItems: 'center', justifyContent: 'space-around' }}><Text style={{ color: 'blue' }}>Welcome to React Native !!</Text></View>
    );
  }
}

export default Details;
