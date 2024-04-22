import {useRef} from 'react';
import {Animated, Easing} from 'react-native';

export const useAnimation = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(0)).current;

  const fadeIn = ({duration = 300, toValue = 1, callback = () => {}}) => {
    // Animated.timing(animatedTop, {
    //   toValue: 0,
    //   duration: 700,
    //   useNativeDriver: true,
    //   easing: Easing.elastic(1),
    // }).start();
    Animated.timing(animatedOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
    }).start(callback);
  };

  const fadeOut = ({duration = 300, toValue = 1, callback = () => {}}) => {
    Animated.timing(animatedOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
    }).start(
      callback,
      // () => animatedTop.resetAnimation()
    );
  };

  const startMovingTop = ({
    toValue = 0,
    duration = 300,
    initalPosition = 0,
    callback = () => {},
    easig = Easing.linear,
  }) => {
    animatedTop.setValue(initalPosition),
      Animated.timing(animatedTop, {
        toValue: toValue,
        duration: duration,
        useNativeDriver: true,
        easing: easig,
      }).start(callback);
  };

  return {
    // Properties
    animatedOpacity,
    animatedTop,

    //Methods
    fadeIn,
    fadeOut,
    startMovingTop
  };
};
