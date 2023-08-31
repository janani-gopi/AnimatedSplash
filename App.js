import {View, Text, StatusBar, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Splash} from './screens/Splash';

const App = () => {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <View style={styles.container}>
        <Text style={styles.text}>Welcome!</Text>

        {visible && <Splash  onAnimationEnd={() => {
            setVisible(false);
          }} />}
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 24,
    fontWeight: '700',
    margin: 20,
    lineHeight: 30,
    color: '#333',
    textAlign: 'center',
  },
});
