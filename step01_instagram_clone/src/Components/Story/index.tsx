import React, {FC} from 'react';
import {View, Text} from 'react-native';
import ProfilePicture from './../ProfilePicture';
import styles from './styles';

interface Props {
  imgUri: string;
  name: string;
}
const Story: FC<Props> = ({imgUri, name}) => {
  return (
    <View style={styles.wrapper}>
      <ProfilePicture uri={imgUri} />
      <Text>{name}</Text>
    </View>
  );
};

export default Story;
