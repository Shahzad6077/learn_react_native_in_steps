import React, {FC, useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import style from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconFeather from 'react-native-vector-icons/Feather';

type Props = {
  caption: string;
  likesCount: number;
  createdAt: number;
};
const test = {
  liked: true,
  bookmarked: true,
};
const Footer: FC<Props> = ({likesCount, caption, createdAt}) => {
  const [isLike, setIsLike] = useState(false);
  const [isBookmark, setIsbookmark] = useState(false);

  // CONDITIONAL
  const liked = isLike ? 'heart' : 'heart-o';
  const bookmarked = isBookmark ? 'bookmark' : 'bookmark-o';
  return (
    <View style={style.footer}>
      <View style={style.actionWrapper}>
        <Pressable
          style={style.actionIcon}
          onPress={() => setIsLike(!isLike)}
          android_ripple={{color: '#ccc', borderless: true}}>
          <Icon name={liked} size={30} color={isLike ? '#e73838' : '#000'} />
        </Pressable>
        <Pressable
          style={style.actionIcon}
          onPress={() => console.log("i'm pressed")}
          android_ripple={{color: '#ccc', borderless: true}}>
          <Icon name="comment-o" size={30} color="#000" />
        </Pressable>
        <Pressable
          style={style.actionIcon}
          onPress={() => console.log("i'm pressed")}
          android_ripple={{color: '#ccc', borderless: true}}>
          <IconFeather name="send" size={30} color="#000" />
        </Pressable>
        <Pressable
          style={[style.bookmarkIcon]}
          onPress={() => setIsbookmark(!isBookmark)}
          android_ripple={{color: '#ccc', borderless: true}}>
          <Icon name={bookmarked} size={30} color="#000" />
        </Pressable>
      </View>
      <Text style={style.likes}>{likesCount} likes</Text>
      <Text style={style.caption}>{caption}</Text>
      <Text style={style.created}>{createdAt}</Text>
    </View>
  );
};

export default Footer;
