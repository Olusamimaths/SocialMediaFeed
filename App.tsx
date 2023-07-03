/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import Story from './components/UserStory/Story';
import Posts from './components/UserPost/Posts';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Story />
      <Posts />
    </SafeAreaView>
  );
}
export default App;
