import React from 'react';
import { Text, TextInput, View } from 'react-native';
import PrintPizzasStyle from './PrintPizzas.style';

export default class PrintPizzas extends React.Component {
  state = {
    text: '',
  }

  translateToPizzas() {
    return this.state.text.split(' ').map(() => '🍕').join(' ');
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <TextInput style={PrintPizzasStyle.textToTranslate} placeholder="Enter text to translate" onChangeText={text => this.setState({ text })} />
        <Text style={PrintPizzasStyle.translatedText}>{this.translateToPizzas()}</Text>
      </View>
    );
  }
}
