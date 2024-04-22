import 'react-native-gesture-handler';
import {Navigator} from './presentation/navigator/StackNavigator';
import {ThemeProvider} from './presentation/context/ThemeContext';


export const App = () => {
  return (
    <ThemeProvider>
      <Navigator />
    </ThemeProvider>
  );
};

export default App;
