import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function Home({navigation}) {
  function goToMessages() {
    navigation.navigate('Messages');
  }
  function goToFeed() {
    navigation.navigate('Feed');
  }
  return (
    <View style={[styles.container, styles.screenHome]}>
      <Pressable style={styles.button} onPress={goToMessages}>
        <Text style={styles.buttonTextColor}>Go to Messages</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={goToFeed}>
        <Text style={styles.buttonTextColor}>Go to Feed</Text>
      </Pressable>
    </View>
  );
}

function Messages({navigation}) {
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

function Feed({navigation}) {
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

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Home'} component={Home} />
        <Stack.Screen name={'Feed'} component={Feed} />
        <Stack.Screen name={'Messages'} component={Messages} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    flex: 1,
  },
  screenHome: {backgroundColor: 'grey'},
  screenFeed: {backgroundColor: 'green'},
  screenMessages: {backgroundColor: 'purple'},
  button: {
    marginTop: 15,
  },
  buttonTextColor: {
    color: '#fff',
  },
});

export default App;
