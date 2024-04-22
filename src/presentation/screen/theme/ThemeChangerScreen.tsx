import {useContext} from 'react';
import {Text, View} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {Button} from '../../components/ui/Bottom';
import {ThemeContext} from '../../context/ThemeContext';
import {Card} from '../../components/ui/Card';

export const ThemeChangerScreen = () => {
  const {setTheme, currentTheme, colors} = useContext(ThemeContext);

  return (
    <CustomView margin>
      <Title text={`Cambiar tema: ${currentTheme}`} safe />

      <View style={{height: 20}} />

      <Button
        text="Light"
        onPress={() => {
          setTheme('light');
        }}
      />

      <View style={{height: 20}} />
      <Button
        text="Dark"
        onPress={() => {
          setTheme('dark');
        }}
      />
      <View style={{height: 20}} />
      <Card>
        <Text style={{color: colors.text}}>
          {JSON.stringify(colors, null, 3)}
        </Text>
      </Card>
    </CustomView>
  );
};
