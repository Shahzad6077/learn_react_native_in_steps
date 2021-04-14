import React, {FC} from 'react';
import {View, Text, Image} from 'react-native';
import style from './styles';

type Props = {
  imageUri: string;
};
const Body: FC<Props> = ({imageUri}) => {
  return (
    <View style={style.bodyWrapper}>
      <Image source={{uri: imageUri}} style={style.bodyImg} />
    </View>
  );
};

export default Body;
