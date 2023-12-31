const {StyleSheet} = require('react-native');

const style = StyleSheet.create({
  userName: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 19,
  },
  location: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15,
    color: '#79869F',
  },
  userInformation: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userNameAndLocation: {
    marginLeft: 10,
  },
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#EFF2F6',
    marginBottom: 20,
  },

  userInformationContainer: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  post: {
    marginVertical: 16,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  postStatistics: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  postStatisticsElement: {
    marginRight: 25,
    flexDirection: 'row',
  },
  icon: {
    marginRight: 3,
    color: '#79869F',
  },
  postStatisticsText: {
    color: '#79869F',
  },

  userStoryContainer: {paddingLeft: 26, marginTop: 10},
  userPostContainer: {paddingHorizontal: 26, marginTop: 20},

  iconActive: {color: '#FF4D5B', marginRight: 3},
});

export default style;
