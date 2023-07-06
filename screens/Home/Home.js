/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import Posts from '../../components/UserPost/Posts';
import globalStyle from '../../assets/styles/main';

function Home({navigation}) {
  return (
    <SafeAreaView style={globalStyle.backgroundWhite}>
      <Posts navigation={navigation} />
    </SafeAreaView>
  );
}
export default Home;
