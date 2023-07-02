/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Pressable, SafeAreaView, ScrollView, Text, View} from 'react-native';
import Title from './components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import style from './assets/styles/main';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={style.header}>
          <Title title="Let's Explore" />
          <Pressable style={style.messageIcon}>
            <FontAwesomeIcon icon={faEnvelope} color="#CACDDE" size={20} />
            <View style={style.messageNotificationContainer}>
              <Text style={style.messageNotificationText}>2</Text>
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default App;
