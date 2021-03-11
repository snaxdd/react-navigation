import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

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

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={'Home'} component={Home} />
      <Drawer.Screen name={'Messages'} component={Messages} />
      <Drawer.Screen name={'Feed'} component={Feed} />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
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
