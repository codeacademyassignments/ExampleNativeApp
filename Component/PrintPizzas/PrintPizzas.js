import React from 'react';
import { Text, TextInput, View } from 'react-native';

export default class PrintPizzas extends React.Component {
  state = {
    text: '',
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <TextInput style={{ height: 100, fontSize: 25 }} placeholder="Enter text to translate" onChangeText={text => this.setState({ text })} />
        <Text style={{ fontSize: 42 }}>{this.state.text.split(' ').map(() => '🍕').join(' ')}</Text>
      </View>
    );
  }
}
