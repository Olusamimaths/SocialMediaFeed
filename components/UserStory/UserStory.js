import React from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';
import style from './style';
import UserAvatar from '../UserAvatar/UserAvatar';

const UserStory = ({firstName}) => {
  return (
    <View style={style.userAvatarContainer}>
      <UserAvatar />
      <Text style={style.storyUserName}>{firstName}</Text>
    </View>
  );
};

UserStory.propTypes = {
  firstName: PropTypes.string.isRequired,
};
export default UserStory;
