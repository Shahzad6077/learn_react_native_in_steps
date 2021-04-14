import React from 'react';
import {View, FlatList} from 'react-native';
import Post from './../Post';
import Stories from './../Stories';

const postList = [
  {
    postId: 'asdzxc',
    user: {
      imageUri: 'https://picsum.photos/id/1059/300',
      username: 'shahzad',
    },
    imageUri: 'https://picsum.photos/id/102/720',
    caption: 'tasty strawbaries',
    likesCount: 54215,
    createdAt: 65467231,
  },
  {
    postId: 'qwev',
    user: {
      imageUri: 'https://picsum.photos/id/1059/300',
      username: 'shahzad',
    },
    imageUri: 'https://picsum.photos/id/102/720',
    caption: 'tasty strawbaries',
    likesCount: 54215,
    createdAt: 65467231,
  },
  {
    postId: 'vvfr',
    user: {
      imageUri: 'https://picsum.photos/id/1059/300',
      username: 'shahzad',
    },
    imageUri: 'https://picsum.photos/id/102/720',
    caption: 'tasty strawbaries',
    likesCount: 54215,
    createdAt: 65467231,
  },
  {
    postId: 'xry',
    user: {
      imageUri: 'https://picsum.photos/id/1059/300',
      username: 'shahzad',
    },
    imageUri: 'https://picsum.photos/id/102/720',
    caption: 'tasty strawbaries',
    likesCount: 54215,
    createdAt: 65467231,
  },
  {
    postId: 'cvbcxbert',
    user: {
      imageUri: 'https://picsum.photos/id/1059/300',
      username: 'shahzad',
    },
    imageUri: 'https://picsum.photos/id/102/720',
    caption: 'tasty strawbaries',
    likesCount: 54215,
    createdAt: 65467231,
  },
];
const Feed = () => {
  return (
    <FlatList
      style={{flex: 1}}
      keyExtractor={item => item.postId}
      ListHeaderComponent={Stories}
      data={postList}
      renderItem={({item}) => <Post {...item} />}
      // contentContainerStyle={{paddingBottom: 120}}
    />
  );
};

export default Feed;
