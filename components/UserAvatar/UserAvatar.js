import React from 'react';
import {Image, View} from 'react-native';
import style from './style';

function UserAvatar() {
  return (
    <View style={style.avatar}>
      <Image source={require('../../assets/images/default_profile.png')} />
    </View>
  );
}

export default UserAvatar;
