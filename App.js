/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './Component/HomeScreen/HomeScreen';
import Details from './Component/Details/Details';
import PrintPizzas from './Component/PrintPizzas/PrintPizzas';


const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Details: { screen: Details },
  PrintPizzas: { screen: PrintPizzas },
});

const App = createAppContainer(MainNavigator);

export default App;

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double 2 R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (


//     );
//   }


// }

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
}); */
