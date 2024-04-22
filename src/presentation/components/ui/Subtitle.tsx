import {Text, View} from 'react-native';
import {colors, globalStyles} from '../../../config/theme/theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useContext} from 'react';
import {ThemeContext} from '../../context/ThemeContext';

interface Props {
  text: string;
  safe?: boolean;
  bgColor: string;
}

export const Subtitle = ({bgColor = colors.background, text, safe}: Props) => {
  const {top} = useSafeAreaInsets();
  const {colors} = useContext(ThemeContext);

  return (
    <View>
      <Text
        style={{
          ...globalStyles.subTitle,
          marginTop: safe ? top : 0,
          backgroundColor: bgColor,
          color: colors.text
        }}>
        {text}
      </Text>
    </View>
  );
};
