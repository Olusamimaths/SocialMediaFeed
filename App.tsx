/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {FlatList, SafeAreaView, ScrollView, View} from 'react-native';
import AppHeader from './components/AppHeader/AppHeader';
import UserStory from './components/UserStory/UserStory';
import style from './assets/styles/main';

function App(): JSX.Element {
  const data = [
    {
      id: 1,
      firstName: 'John',
    },
    {
      id: 2,
      firstName: 'Sam',
    },
    {
      id: 3,
      firstName: 'Alex',
    },
    {
      id: 4,
      firstName: 'Wick',
    },
    {
      id: 5,
      firstName: 'Awa',
    },
    {
      id: 6,
      firstName: 'Kiki',
    },
    {
      id: 7,
      firstName: 'Nicolas',
    },
    {
      id: 8,
      firstName: 'Cage',
    },
    {
      id: 9,
      firstName: 'Tobi',
    },
    {
      id: 10,
      firstName: 'Obi',
    },
  ];
  const pageSize = 4;
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [currentData, setCurrentData] = useState([]);
  return (
    <SafeAreaView>
      <ScrollView>
        <AppHeader />
      </ScrollView>
      <View style={style.userStoryContainer}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={data}
          renderItem={({item}) => <UserStory firstName={item.firstName} />}
        />
      </View>
    </SafeAreaView>
  );
}
export default App;
