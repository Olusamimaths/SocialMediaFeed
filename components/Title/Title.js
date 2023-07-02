import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import style from './style';

const Title = ({title}) => {
  return <Text style={style.title}> {title} </Text>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
