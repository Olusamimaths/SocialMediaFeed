import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import style from './style';

const ProfileTabTitle = ({isFocused, title}) => {
  return (
    <Text
      style={[
        style.title,
        {
          color: isFocused ? '#022150' : '#79869F',
          fontWeight: isFocused ? '500' : '400',
        },
      ]}>
      {title}
    </Text>
  );
};

ProfileTabTitle.propTypes = {
  isFocused: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default ProfileTabTitle;
