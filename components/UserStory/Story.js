/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {FlatList} from 'react-native';
import UserStory from './UserStory';
import {getUsers} from '../../data/getUsers';
import {paginate} from '../../util/paginate';

function Story() {
  const users = getUsers();
  const pageSize = 5;
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [currentData, setCurrentData] = useState(users.slice(0, pageSize));

  return (
    <FlatList
      keyExtractor={item => item.id.toString()}
      onEndReachedThreshold={0.5}
      onEndReached={() => {
        if (!isLoading) {
          setIsLoading(true);
          setCurrentData(prev => [
            ...prev,
            ...paginate({
              data: users,
              _page: page + 1,
              _pageSize: pageSize,
              setPageFunction: setPage,
            }),
          ]);
          setIsLoading(false);
        }
      }}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      data={currentData}
      renderItem={({item}) => <UserStory firstName={item.firstName} />}
    />
  );
}
export default Story;
