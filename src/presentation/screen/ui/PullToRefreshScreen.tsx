import {RefreshControl, Text, View} from 'react-native';
import {Title} from '../../components/ui/Title';
import {CustomView} from '../../components/ui/CustomView';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useContext, useState} from 'react';
import {ThemeContext} from '../../context/ThemeContext';

export const PullToRefreshScreen = () => {
  const {top} = useSafeAreaInsets();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = () => {
    setTimeout(() => {
      setIsRefreshing(true);
    }, 2000);
  };
  const {colors} = useContext(ThemeContext);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          progressViewOffset={top}
          colors={[colors.primary, 'crimson', 'green']}
          onRefresh={onRefresh}
        />
      }
      style={{
        backgroundColor: colors.background,
      }}>
      <CustomView margin>
        <Title text="Pull to refresh" safe />
      </CustomView>
    </ScrollView>
  );
};
