import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Story from '../Story';
import styles from './styles';

const data = Array(10)
  .fill(0)
  .map((_, i) => ({
    id: i,
    name: 'Shahzad ' + i,
    imgUri: `https://picsum.photos/id/${1060 + i}/300`,
  }));
const Stories = () => {
  return (
    <View style={styles.wrapper}>
      <FlatList
        style={styles.list}
        horizontal={true}
        data={data}
        renderItem={({item}) => <Story {...item} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Stories;
