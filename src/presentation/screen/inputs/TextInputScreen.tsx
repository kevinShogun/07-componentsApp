import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  View,
} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {Card} from '../../components/ui/Card';
import {globalStyles} from '../../../config/theme/theme';
import {useContext, useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {ThemeContext} from '../../context/ThemeContext';

export const TextInputScreen = () => {
  const [form, setform] = useState({
    name: '',
    emial: '',
    phone: '',
  });

  const {colors, currentTheme} = useContext(ThemeContext);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{
        backgroundColor: colors.background,
      }}>
      <ScrollView>
        <CustomView margin>
          <Title text="Text input" safe />

          <Card>
            <TextInput
              style={[
                globalStyles.input,
                {
                  color: colors.text,
                  borderColor:
                    currentTheme === 'light'
                      ? 'rgba(0, 0, 0, 0.3)'
                      : 'rgba(255, 255, 255, 0.5)',
                },
              ]}
              placeholderTextColor={colors.text}
              placeholder="Nombre completo"
              autoCapitalize="words"
              autoCorrect={false}
              onChangeText={value => setform({...form, name: value})}
            />

            <TextInput
              style={[
                globalStyles.input,
                {
                  color: colors.text,
                  borderColor:
                    currentTheme === 'light'
                      ? 'rgba(0, 0, 0, 0.3)'
                      : 'rgba(255, 255, 255, 0.5)',
                },
              ]}
              placeholder="Email"
              placeholderTextColor={colors.text}
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={value => setform({...form, emial: value})}
            />

            <TextInput
              style={[
                globalStyles.input,
                {
                  color: colors.text,
                  borderColor:
                    currentTheme === 'light'
                      ? 'rgba(0, 0, 0, 0.3)'
                      : 'rgba(255, 255, 255, 0.5)',
                },
              ]}
              placeholderTextColor={colors.text}
              placeholder="phone"
              autoCorrect={false}
              keyboardType="phone-pad"
              onChangeText={value => setform({...form, phone: value})}
            />
          </Card>

          <View style={{height: 10}} />

          <Card>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
          </Card>
          <View style={{height: 10}} />

          <Card>
            <TextInput
              style={[
                globalStyles.input,
                {
                  color: colors.text,
                  borderColor:
                    currentTheme === 'light'
                      ? 'rgba(0, 0, 0, 0.3)'
                      : 'rgba(255, 255, 255, 0.5)',
                },
              ]}
              placeholder="phone"
              placeholderTextColor={colors.text}
              autoCorrect={false}
              keyboardType="phone-pad"
              onChangeText={value => setform({...form, phone: value})}
            />
          </Card>
        </CustomView>
        <View style={{height: 20}} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
