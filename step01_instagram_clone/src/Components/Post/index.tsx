import React, {FC} from 'react';
import {View, Text} from 'react-native';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import style from './styles';

type Props = {
  user: {
    imageUri: string;
    username: string;
  };
  imageUri: string;
  caption: string;
  likesCount: number;
  createdAt: number;
};
const Post: FC<Props> = ({user, imageUri, caption, likesCount, createdAt}) => {
  return (
    <View style={style.postWrapper}>
      <Text>Post</Text>
      <Header {...user} />
      <Body imageUri={imageUri} />
      <Footer {...{caption, likesCount, createdAt}} />
    </View>
  );
};

export default Post;
