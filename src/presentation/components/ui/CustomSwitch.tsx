import { useContext } from 'react';
import {Platform, StyleSheet, Switch, Text, View} from 'react-native';
import {isEnabled} from 'react-native/Libraries/Performance/Systrace';
import { ThemeContext } from '../../context/ThemeContext';

interface Props {
  value: boolean;
  text?: string;
  toggleSwitch: (value: boolean) => void;
}

export const CustomSwitch = ({toggleSwitch, value, text}: Props) => {

  const {colors} = useContext(ThemeContext);


  return (
    <View style={style.swicthRow}>
      {text && <Text style={{color: colors.text}}>{text}</Text>}
      <Switch
        thumbColor={Platform.OS === 'android' ? colors.primary : ''}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={value}
      />
    </View>
  );
};

const style = StyleSheet.create({
  swicthRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
