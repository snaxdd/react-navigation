import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

export function Feed({navigation}) {
  function goToHome() {
    navigation.navigate('Home');
  }
  function goToMessages() {
    navigation.navigate('Messages');
  }
  return (
    <View style={[styles.container, styles.screenFeed]}>
      <Pressable style={styles.button} onPress={goToMessages}>
        <Text style={styles.buttonTextColor}>Go to Messages</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={goToHome}>
        <Text style={styles.buttonTextColor}>Go to Home</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    flex: 1,
  },
  screenFeed: {backgroundColor: 'green'},
  button: {
    marginTop: 15,
  },
  buttonTextColor: {
    color: '#fff',
  },
});
