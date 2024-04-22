import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screen/home/HomeScreen';
import {Animation101Screen} from '../screen/animation/Animation101Screen';
import {Animation102Screen} from '../screen/animation/Animation102Screen';
import {SwitchesScreen} from '../screen/switches/SwitchesScreen';
import {AlertsScreen} from '../screen/alerts/AlertsScreen';
import {TextInputScreen} from '../screen/inputs/TextInputScreen';
import {PullToRefreshScreen} from '../screen/ui/PullToRefreshScreen';
import {CustomSectionListScreen} from '../screen/ui/CustomSectionListScreen';
import {ModalScreen} from '../screen/ui/ModalScreen';
import { InfiniteScrollScreen } from '../screen/ui/InfiniteScrollScreen';
import { SlidesScreen } from '../screen/ui/SlidesScreen';
import { ThemeChangerScreen } from '../screen/theme/ThemeChangerScreen';

const Stack = createStackNavigator();
export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />

      <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
      <Stack.Screen name="Animation102Screen" component={Animation102Screen} />

      <Stack.Screen name="SwitchesScreen" component={SwitchesScreen} />
      <Stack.Screen name="AlertsScreen" component={AlertsScreen} />
      <Stack.Screen name="TextInputScreen" component={TextInputScreen} />

      <Stack.Screen
        name="PullToRefreshScreen"
        component={PullToRefreshScreen}
      />
      <Stack.Screen
        name="CustomSectionListScreen"
        component={CustomSectionListScreen}
      />
      <Stack.Screen name="ModalScreen" component={ModalScreen} />
      <Stack.Screen name="InfiniteScrollScreen" component={InfiniteScrollScreen} />
      <Stack.Screen name="SlidesScreen" component={SlidesScreen} />
      <Stack.Screen name="ThemeChangerScreen" component={ThemeChangerScreen} />
      
    </Stack.Navigator>
  );
};
