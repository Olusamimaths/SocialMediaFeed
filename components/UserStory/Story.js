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

function Story() {
  const users = getUsers();
  const pageSize = 5;
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [currentData, setCurrentData] = useState(users.slice(0, pageSize));

  const paginate = (data, _page, _pageSize) => {
    const offset = (_page - 1) * _pageSize;
    if (offset >= data.length) {
      return [];
    }
    const newData = data.slice(offset, offset + _pageSize);
    setPage(_page);
    return newData;
  };
  return (
    <FlatList
      keyExtractor={item => item.id.toString()}
      onEndReachedThreshold={0.5}
      onEndReached={() => {
        if (!isLoading) {
          setIsLoading(true);
          setCurrentData(prev => [
            ...prev,
            ...paginate(users, page + 1, pageSize),
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
