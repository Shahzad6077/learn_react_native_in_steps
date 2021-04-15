import React, {FC} from 'react';
import {Pressable} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import EvilIconsIcon from 'react-native-vector-icons/EvilIcons';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

type Props = {
  name: string;
  iconType: string;
  onClick: () => void;
  size?: number;
  color?: string;
};

const PressableIcon: FC<Props> = ({
  name,
  iconType,
  onClick,
  size = 16,
  color = '#000',
}) => {
  let iconComp = null;

  switch (iconType) {
    case 'Feather':
      iconComp = <FeatherIcon {...{name, color, size}} />;
      break;
    case 'FontAwesome':
      iconComp = <FontAwesomeIcon {...{name, color, size}} />;
      break;
    case 'MaterialCommunityIcons':
      iconComp = <MaterialCommunityIconsIcon {...{name, color, size}} />;
      break;
    case 'AntDesign':
      iconComp = <AntDesignIcon {...{name, color, size}} />;
      break;
    case 'EvilIcons':
      iconComp = <EvilIconsIcon {...{name, color, size}} />;
      break;
    case 'Foundation':
      iconComp = <FoundationIcon {...{name, color, size}} />;
      break;
    case 'Ionicons':
      iconComp = <IoniconsIcon {...{name, color, size}} />;
      break;
    default:
      iconComp = <FontAwesomeIcon {...{name, color, size}} />;
  }
  return (
    <Pressable
      onPress={onClick}
      android_ripple={{color: '#ccc', borderless: true}}>
      {iconComp}
    </Pressable>
  );
};

export default PressableIcon;
