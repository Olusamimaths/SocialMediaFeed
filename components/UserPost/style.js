import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '../../assets/styles/scaling';

const {StyleSheet} = require('react-native');

const style = StyleSheet.create({
  userName: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: fontScale(14),
    lineHeight: fontScale(19),
  },
  location: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: fontScale(12),
    lineHeight: fontScale(15),
    paddingTop: verticalScale(5),
    color: '#79869F',
  },
  userInformation: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userNameAndLocation: {
    marginLeft: horizontalScale(10),
  },
  container: {
    borderBottomWidth: verticalScale(1),
    borderBottomColor: '#EFF2F6',
    marginTop: verticalScale(15),
  },

  userInformationContainer: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  post: {
    marginVertical: verticalScale(16),
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  postStatistics: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: verticalScale(30),
    paddingHorizontal: horizontalScale(5),
  },
  postStatisticsElement: {
    marginRight: horizontalScale(25),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginRight: horizontalScale(3),
    color: '#79869F',
  },
  postStatisticsText: {
    color: '#79869F',
  },

  userStoryContainer: {
    paddingLeft: horizontalScale(25),
    marginTop: verticalScale(10),
    height: 100,
  },
  userPostContainer: {
    paddingHorizontal: horizontalScale(25),
    marginTop: verticalScale(10),
  },

  iconActive: {color: '#FF4D5B', marginRight: 3},
});

export default style;
