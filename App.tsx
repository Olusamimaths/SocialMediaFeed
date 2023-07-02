/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import AppHeader from './components/AppHeader/AppHeader';
import style from './assets/styles/main';
import Story from './components/UserStory/Story';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <AppHeader />

        <View style={style.userStoryContainer}>
          <Story />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default App;
