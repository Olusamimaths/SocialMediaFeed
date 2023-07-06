import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '../../assets/styles/scaling';

const {StyleSheet} = require('react-native');

const style = StyleSheet.create({
  header: {
    paddingTop: verticalScale(30),
    paddingLeft: horizontalScale(26),
    paddingRight: horizontalScale(26),
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageIcon: {
    backgroundColor: '#F9FAFB',
    padding: horizontalScale(12),
    borderRadius: horizontalScale(100),
  },
  messageNotificationContainer: {
    width: horizontalScale(11),
    height: verticalScale(10),
    backgroundColor: '#F35BAC',
    borderRadius: horizontalScale(11),
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: horizontalScale(7),
    top: verticalScale(8),
  },
  messageNotificationText: {
    fontSize: fontScale(6),
    fontFamily: 'Inter',
    lineHeight: fontScale(7),
    fontWeight: '600',
    color: '#fff',
  },
});

export default style;
