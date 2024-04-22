import {
  ActivityIndicator,
  Animated,
  Image,
  ImageStyle,
  StyleProp,
  Text,
  View,
} from 'react-native';
import {colors} from '../../../config/theme/theme';
import {useState} from 'react';
import {useAnimation} from '../../hooks/useAnimation';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({uri, style}: Props) => {
  const {animatedOpacity, fadeIn} = useAnimation();

  const [isLoading, setIsLoading] = useState(true);

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {isLoading && (
        <ActivityIndicator
          size={40}
          color={'grey'}
          style={{position: 'absolute'}}
        />
      )}

      <Animated.Image
        source={{uri}}
        onLoadEnd={() => {
          fadeIn({duration: 3000});
          setIsLoading(false);
        }}
        style={[
          style,
          {
            opacity: animatedOpacity,
          },
        ]}
      />
    </View>
  );
};
