/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import Posts from './components/UserPost/Posts';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Posts />
    </SafeAreaView>
  );
}
export default App;
