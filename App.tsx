/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import AppHeader from './components/AppHeader/AppHeader';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <AppHeader />
      </ScrollView>
    </SafeAreaView>
  );
}
export default App;
