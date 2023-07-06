import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '../../assets/styles/scaling';

const {StyleSheet} = require('react-native');

const style = StyleSheet.create({
  profileImageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(22),
  },
  profileImageContent: {
    borderWidth: 1,
    borderRadius: horizontalScale(120),
    padding: horizontalScale(3),
    borderColor: '#0150EC',
  },
  profileImage: {
    width: horizontalScale(120),
    height: horizontalScale(120),
  },
  userName: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: fontScale(20),
    lineHeight: fontScale(24),
    color: '#022150',
  },
  userNameContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(20),
  },

  profileStatsContainer: {
    marginHorizontal: horizontalScale(24),
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(15),
  },

  singleStatContainer: {
    alignItems: 'center',
    paddingHorizontal: horizontalScale(18),
    paddingVertical: verticalScale(10),
  },
  singleStatBorder: {
    borderRightWidth: 1,
    borderRightColor: '#E9EFF1',
  },
  singleStatNumber: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: fontScale(20),
    lineHeight: fontScale(24),
    color: '#022150',
  },
  singleStyleText: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: fontScale(15),
    lineHeight: fontScale(20),
    color: '#79869F',
    marginTop: verticalScale(5),
  },
  borderHorizontal: {
    borderTopWidth: 1,
    borderColor: '#EFF2F6',
    marginVertical: verticalScale(15),
    marginHorizontal: horizontalScale(24),
  },
});

export default style;
