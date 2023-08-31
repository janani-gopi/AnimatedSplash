import {useState} from 'react';
import {Animated, Image} from 'react-native';
import BootSplash from 'react-native-bootsplash';

export const Splash = ({onAnimationEnd}) => {
  const [opacity] = useState(() => new Animated.Value(1));

  const {container, logo /*, brand */} = BootSplash.useHideAnimation({
    manifest: require('../assets/bootsplash_manifest.json'),

    logo: require('../assets/bootsplash_logo.png'),
    statusBarTranslucent: true,
    navigationBarTranslucent: false,

    animate: () => {
      // Perform animations and call onAnimationEnd
      Animated.timing(opacity, {
        useNativeDriver: true,
        toValue: 0,
        duration: 400,
      }).start(() => {
        onAnimationEnd();
      });
    },
  });

  return (
    <Animated.View {...container} style={[container.style, {opacity}]}>
      <Image {...logo} style={logo.style} />
    </Animated.View>
  );
};
