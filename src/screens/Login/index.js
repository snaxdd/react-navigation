import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Button} from '../../components/Button';
import {Navigation} from 'react-native-navigation';

export function Login(props) {
  function goToHomeScreen() {
    Navigation.push(props.componentId, {
      component: {
        name: 'Home',
        options: {
          topBar: {
            title: {
              text: 'Home',
            },
          },
        },
      },
    });
  }
  function goToSomeScreen() {
    Navigation.push(props.componentId, {
      component: {
        name: 'Some',
        options: {
          topBar: {
            title: {
              text: 'Some',
            },
          },
        },
      },
    });
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login Screen</Text>
      <Button
        text={'Next...'}
        onPress={goToHomeScreen}
        stylesContainer={{marginBottom: 15, backgroundColor: 'purple'}}
      />
      <Button text={'Some...'} onPress={goToSomeScreen} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});
