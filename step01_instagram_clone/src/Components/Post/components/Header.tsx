import React, {FC} from 'react';
import {View, Text, Pressable} from 'react-native';
import ProfilePicture from '../../ProfilePicture';
import styles from './styles';
import Icon from 'react-native-vector-icons/Entypo';
import style from './styles';

type Props = {
  imageUri: string;
  username: string;
};
const Header: FC<Props> = ({imageUri, username}) => {
  return (
    <View style={styles.headerWrapper}>
      <ProfilePicture uri={imageUri} size={50} />
      <View>
        <Text style={{fontWeight: '700'}}>{username}</Text>
        <Text>Location</Text>
      </View>
      <Pressable
        style={style.dotsBtn}
        onPress={() => console.log("i'm pressed")}
        android_ripple={{color: '#ccc', borderless: true}}>
        <Icon name="dots-three-horizontal" size={20} />
      </Pressable>
    </View>
  );
};

export default Header;
