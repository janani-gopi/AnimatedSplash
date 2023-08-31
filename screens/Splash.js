import {useState} from 'react';
import {Animated, Image, Dimensions} from 'react-native';
import BootSplash from 'react-native-bootsplash';

export const Splash = ({onAnimationEnd}) => {
  const [opacity] = useState(() => new Animated.Value(1));
  const [translateY] = useState(() => new Animated.Value(0));

  const {container, logo /*, brand */} = BootSplash.useHideAnimation({
    manifest: require('../assets/bootsplash_manifest.json'),

    logo: require('../assets/bootsplash_logo.png'),
    statusBarTranslucent: true,
    navigationBarTranslucent: false,

    animate: () => {
      //translate Y animation
      const {height} = Dimensions.get('window');

      Animated.stagger(150, [
        Animated.spring(translateY, {
          useNativeDriver: true,
          toValue: -50,
          delay:3000
        }),
        Animated.spring(translateY, {
          useNativeDriver: true,
          toValue: height,
        }),
      ]).start();

      // Perform animations and call onAnimationEnd
      Animated.timing(opacity, {
        useNativeDriver: true,
        toValue: 0,
        duration: 400,
        delay:500
      }).start(() => {
        onAnimationEnd();
      });
    },
  });

  return (
    <Animated.View {...container} style={[container.style, {opacity}]}>
       <Animated.Image
        {...logo}
        style={[logo.style, { transform: [{ translateY }] }]}
      />
    </Animated.View>
  );
};
