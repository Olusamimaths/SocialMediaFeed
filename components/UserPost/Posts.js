import React from 'react';
import {paginate} from '../../util/paginate';
import UserPost from './UserPost';
import AppHeader from '../AppHeader/AppHeader';
import Story from '../UserStory/Story';
import style from './style';

const {useState} = require('react');
const {getPosts} = require('../../data/getPosts');
const {FlatList, View} = require('react-native');

function Posts() {
  const posts = getPosts();
  const pageSize = 2;
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [currentData, setCurrentData] = useState(posts.slice(0, pageSize));

  return (
    <FlatList
      ListHeaderComponent={
        <>
          <AppHeader />
          <View style={style.userStoryContainer}>
            <Story />
          </View>
        </>
      }
      keyExtractor={item => `post-${item.id.toString()}`}
      onEndReachedThreshold={0.5}
      onEndReached={() => {
        if (!isLoading) {
          setIsLoading(true);
          setCurrentData(prev => [
            ...prev,
            ...paginate({
              data: posts,
              _page: page + 1,
              _pageSize: pageSize,
              setPageFunction: setPage,
            }),
          ]);
          setIsLoading(false);
        }
      }}
      showsVerticalScrollIndicator={false}
      data={currentData}
      renderItem={({item}) => (
        <View style={style.userPostContainer}>
          <UserPost postItem={item} />
        </View>
      )}
    />
  );
}

export default Posts;
