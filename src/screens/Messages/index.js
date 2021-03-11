import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

export function Messages({navigation}) {
  function goToHome() {
    navigation.navigate('Home');
  }
  function goToFeed() {
    navigation.navigate('Feed');
  }
  return (
    <View style={[styles.container, styles.screenMessages]}>
      <Pressable style={styles.button} onPress={goToHome}>
        <Text style={styles.buttonTextColor}>Go to Home</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={goToFeed}>
        <Text style={styles.buttonTextColor}>Go to Feed</Text>
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
  screenMessages: {backgroundColor: 'purple'},
  button: {
    marginTop: 15,
  },
  buttonTextColor: {
    color: '#fff',
  },
});
