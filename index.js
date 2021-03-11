import React from 'react';
import {Navigation} from 'react-native-navigation';

import {Login as LoginScreen} from './src/screens/Login';
import {Home as HomeScreen} from './src/screens/Home';
import {Messages as MessagesScreen} from './src/screens/Messages';
import {Feed as FeedScreen} from './src/screens/Feed';

Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Login', () => LoginScreen);
Navigation.registerComponent('Messages', () => MessagesScreen);
Navigation.registerComponent('Feed', () => FeedScreen);

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Login',
            },
          },
        ],
      },
    },
  });
});
