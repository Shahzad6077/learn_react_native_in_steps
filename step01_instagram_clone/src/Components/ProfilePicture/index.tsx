import React, {FC} from 'react';
import {View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

interface Props {
  uri: string;
  size?: number;
}
const ProfilePicture: FC<Props> = ({uri, size = 76}) => {
  return (
    <View style={styles.imgWrapper}>
      <LinearGradient
        colors={['#CA1D7E', '#E35157', '#F2703F']}
        start={{x: 1.0, y: 0.0}}
        end={{x: 1.0, y: 1.0}}
        style={[
          styles.gradientS,
          {
            width: size + 6,
            height: size + 6,
            borderRadius: (size + 6) / 2,
          },
        ]}>
        <Image
          source={{uri}}
          style={[
            styles.img,
            {
              width: size,
              height: size,
              borderRadius: size / 2,
            },
          ]}
        />
      </LinearGradient>
    </View>
  );
};

export default ProfilePicture;
