import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

export function Home({navigation}) {
  function goToFeed() {
    navigation.navigate('Feed');
  }
  function goBack() {
    navigation.goBack();
  }
  return (
    <View style={[styles.container, styles.screenHome]}>
      <Pressable style={styles.button} onPress={goToFeed}>
        <Text style={styles.buttonTextColor}>Go to Feed</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={goBack}>
        <Text style={styles.buttonTextColor}>Go back</Text>
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
  screenHome: {backgroundColor: 'grey'},
  button: {
    marginTop: 15,
  },
  buttonTextColor: {
    color: '#fff',
  },
});
