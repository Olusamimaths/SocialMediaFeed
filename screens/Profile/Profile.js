import React from 'react';
import {SafeAreaView, ScrollView, View, Text, Image} from 'react-native';
import globalStyle from '../../assets/styles/main';
import style from './style';
import {ProfileTabNavigation} from '../../navigation/MainNavigation';

const Profile = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView>
        <View style={style.profileImageContainer}>
          <View style={style.profileImageContent}>
            <Image
              style={style.profileImage}
              source={require('../../assets/images/default_profile.png')}
            />
          </View>
        </View>

        <View style={style.userNameContainer}>
          <Text style={style.userName}>Olusola Samuel</Text>
        </View>

        <View style={style.profileStatsContainer}>
          <View style={[style.singleStatContainer, style.singleStatBorder]}>
            <Text style={style.singleStatNumber}>56</Text>
            <Text style={style.singleStyleText}>Following</Text>
          </View>

          <View style={[style.singleStatContainer, style.singleStatBorder]}>
            <Text style={style.singleStatNumber}>60M</Text>
            <Text style={style.singleStyleText}>Followers</Text>
          </View>

          <View style={style.singleStatContainer}>
            <Text style={style.singleStatNumber}>123</Text>
            <Text style={style.singleStyleText}>Posts</Text>
          </View>
        </View>

        <View style={style.borderHorizontal} />

        <View>
          <ProfileTabNavigation />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
