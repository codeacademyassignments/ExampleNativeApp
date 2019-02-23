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
