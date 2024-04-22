import {Alert, Text, View} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {Button} from '../../components/ui/Bottom';
import {Separator} from '../../components/ui/Separator';
import {showPrompt} from '../../../adapters/promt.adapter';

export const AlertsScreen = () => {
  const createTwoButtonAlert = () => {
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };

  const createThreeButtonAlert = () => {
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };

  const showModalProm = () => {
    showPrompt({
      title: 'Modal Promt',
      description: 'Any desc',
      promptButton: [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel'),
          style: 'destructive',
        },
        {
          text: 'Cancel',
          onPress: password => console.log('OK Pressed, password: ' + password),
        },
      ],
      promptOptions: {
        type: 'email-address',
        cancelable: false,
        defaultValue: 'Kevin',
        placeholder: 'Enter your email',
      },
    });
  };

  // ! Codigo nativo
  // Alert.prompt(
  //   'Correo electronico',
  //   'lorem ipsum kevin yamil',
  //   (value: string) => console.log(value),
  //   'secure-text',
  //   'placeholder',
  //   'number-pad'
  // )

  return (
    <CustomView>
      <Title safe text="Alertas" />

      <Separator
        styles={{
          marginVertical: 10,
          backgroundColor: 'transparent',
        }}
      />
      <Button
        text="Alerta - 2 Botones"
        onPress={createTwoButtonAlert}
        styles={{marginHorizontal: 15}}
      />
      <Separator
        styles={{
          marginVertical: 15,
          backgroundColor: 'transparent',
        }}
      />

      <Button
        text="Alerta - 3 Botones"
        onPress={createThreeButtonAlert}
        styles={{marginHorizontal: 15}}
      />
      <Separator
        styles={{
          marginVertical: 15,
          backgroundColor: 'transparent',
        }}
      />

      <Button
        text="Prompt - Input"
        onPress={showModalProm}
        styles={{marginHorizontal: 15}}
      />
      <Separator
        styles={{
          marginVertical: 15,
          backgroundColor: 'transparent',
        }}
      />
    </CustomView>
  );
};
