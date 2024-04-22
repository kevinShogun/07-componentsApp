import {useContext, useRef} from 'react';
import {Animated, Easing, StyleSheet} from 'react-native';
import {Text, View} from 'react-native';
import {Pressable} from 'react-native';
import {useAnimation} from '../../hooks/useAnimation';
import { colors } from '../../../config/theme/theme';
import { ThemeContext } from '../../context/ThemeContext';
import { CustomView } from '../../components/ui/CustomView';

export const Animation101Screen = () => {
  const {animatedOpacity, animatedTop, fadeIn, fadeOut, startMovingTop} =
    useAnimation();

  const {colors} = useContext(ThemeContext);


  return (
    <CustomView>
      <View style={style.container}>
        <Animated.View
          style={[
            style.purpleBox,
            {
              opacity: animatedOpacity,
              transform: [
                {
                  translateY: animatedTop,
                },
              ],
            },
          ]}
        />

        <Pressable
          style={{marginTop: 10}}
          onPress={() => {
            fadeIn({});
            startMovingTop({
              initalPosition: -100,
              easig: Easing.elastic(1),
              duration: 700,
            });
          }}>
          <Text style={{color: colors.text}}>Fade In</Text>
        </Pressable>

        <Pressable
          style={{marginTop: 10}}
          onPress={() =>
            fadeOut({
              callback: () => {
                animatedOpacity.resetAnimation()
              },
            })
          }>
          <Text style={{color: colors.text}}>Fade out</Text>
        </Pressable>
      </View>
    </CustomView>
  );
};

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },

  purpleBox: {
    backgroundColor: colors.primary,
    width: 150,
    height: 150,
  },
});
