import { useContext } from 'react';
import {StyleProp, Text, View, ViewStyle} from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';

interface Props {
  styles?: StyleProp<ViewStyle>;
}

export const Separator = ({styles}: Props) => {

  const {colors} = useContext(ThemeContext);

  return (
    <View
      style={{
        backgroundColor: colors.cardBackground,
      }}>
      <View
        style={[
          {
            marginVertical: 10,
            backgroundColor: colors.text,
            height: 1,
            width: '100%',
          },
          styles,
        ]}></View>
    </View>
  );
};
