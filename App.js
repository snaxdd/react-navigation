import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
/**
 *  Screens
 */
import {Login} from './src/screens/Login';
import {Home as HomeScreen} from './src/screens/Home';
import {Messages as MessagesScreen} from './src/screens/Messages';
import {Feed as FeedScreen} from './src/screens/Feed';

const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator();
const HomeStack = createStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
      <Tab.Screen name="Feed" component={FeedScreen} />
    </Tab.Navigator>
  );
}

function SomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Messages" component={MessagesScreen} />
      <Tab.Screen name="Feed" component={FeedScreen} />
    </Tab.Navigator>
  );
}

function Home() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name={'Home'} component={HomeScreen} />
      <HomeStack.Screen name={'Feed'} component={FeedScreen} />
    </HomeStack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name={'Login'}
          component={Login}
          options={{headerShown: false}}
        />
        <RootStack.Screen name={'Home'} component={MyTabs} />
        <RootStack.Screen name={'Some'} component={SomeTabs} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
