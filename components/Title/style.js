import {fontScale} from '../../assets/styles/scaling';

const {StyleSheet} = require('react-native');

const style = StyleSheet.create({
  title: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: fontScale(24),
    lineHeight: fontScale(29),
  },
});

export default style;
