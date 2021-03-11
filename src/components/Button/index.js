import React from 'react';
import {StyleSheet, Text, Pressable, View} from 'react-native';

export function Button({text = '', onPress = () => {}, stylesContainer = {}}) {
  return (
    <View style={[styles.container, stylesContainer]}>
      <Pressable onPress={onPress} style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 40,
    backgroundColor: 'grey',
    borderRadius: 5,
  },
  button: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
});
