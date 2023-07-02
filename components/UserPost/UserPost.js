import React from 'react';
import PropTypes from 'prop-types';
import {Image, Pressable, Text, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBookmark,
  faComment,
  faHeart,
} from '@fortawesome/free-regular-svg-icons';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import style from './style';

function UserPost({postItem}) {
  const {firstName, lastName, bookmarks, likes, comments, userLiked, location} =
    postItem;

  return (
    <View style={style.container}>
      <View style={style.userInformationContainer}>
        <View style={style.userInformation}>
          <View style={style.userAvatar}>
            <Image
              style={style.userAvatar}
              resizeMode="cover"
              source={require('../../assets/images/default_profile.png')}
            />
          </View>

          <View style={style.userNameAndLocation}>
            <Text style={style.userName}>
              {postItem.firstName} {postItem.lastName}
            </Text>
            {postItem.location && (
              <Text style={style.location}>{postItem.location}</Text>
            )}
          </View>
        </View>

        <Pressable>
          <FontAwesomeIcon icon={faEllipsisH} color="#79869F" size={22} />
        </Pressable>
      </View>

      <View style={style.post}>
        <Image source={require('../../assets/images/default_post.png')} />
      </View>

      <View style={style.postStatistics}>
        <Pressable style={style.postStatisticsElement}>
          <FontAwesomeIcon icon={faHeart} style={style.icon} />
          <Text style={style.postStatisticsText}>{likes}</Text>
        </Pressable>
        <Pressable style={style.postStatisticsElement}>
          <FontAwesomeIcon icon={faComment} style={style.icon} />
          <Text style={style.postStatisticsText}>{comments}</Text>
        </Pressable>
        <Pressable style={style.postStatisticsElement}>
          <FontAwesomeIcon icon={faBookmark} style={style.icon} />
          <Text style={style.postStatisticsText}>{bookmarks}</Text>
        </Pressable>
      </View>
    </View>
  );
}

UserPost.propTypes = {
  postItem: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    bookmarks: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    userLiked: PropTypes.bool.isRequired,
    location: PropTypes.string,
  }),
};

export default UserPost;
