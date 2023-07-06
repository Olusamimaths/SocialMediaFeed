import {horizontalScale} from '../../assets/styles/scaling';

const {StyleSheet} = require('react-native');

const style = StyleSheet.create({
  avatar: {
    borderWidth: horizontalScale(1),
    borderColor: '#F35BAC',
    padding: horizontalScale(2.5),
    borderRadius: horizontalScale(50),
  },
});

export default style;
