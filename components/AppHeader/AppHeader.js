import React from 'react';
import {Pressable, Text, View} from 'react-native';
import Title from '../Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import style from './style';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';

const AppHeader = () => {
  return (
    <View style={style.userStoryHeader}>
      <View style={style.header}>
        <Title title="Let's Explore" />
        <Pressable style={style.messageIcon}>
          <FontAwesomeIcon icon={faEnvelope} color="#CACDDE" size={20} />
          <View style={style.messageNotificationContainer}>
            <Text style={style.messageNotificationText}>2</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default AppHeader;
