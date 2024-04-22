import {ReactNode, useContext} from 'react';
import {StyleProp, Text, View, ViewStyle} from 'react-native';
import {globalStyles} from '../../../config/theme/theme';
import { ThemeContext } from '../../context/ThemeContext';

interface Props {
  styles?: StyleProp<ViewStyle>;
  children?: ReactNode | ReactNode[];
  margin?: boolean;
}

export const CustomView = ({children, styles, margin = false}: Props) => {
  const {colors} = useContext(ThemeContext);

  return (
    <View
      style={[
        globalStyles.mainContainer,
        styles,
        margin && globalStyles.globalMargin,
        {backgroundColor: colors.background}
      ]}>
      {children}
    </View>
  );
};
