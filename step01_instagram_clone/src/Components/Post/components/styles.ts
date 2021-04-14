import {Dimensions, StyleSheet} from 'react-native';

const style = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dotsBtn: {
    marginLeft: 'auto',
    marginRight: 8,
    padding: 6,
  },
  // BODY STYLES
  bodyWrapper: {},
  bodyImg: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
  },

  // FOOTER STYLES
  footer: {
    margin: 12,
  },
  actionWrapper: {
    flexDirection: 'row',
    height: 42,
    alignItems: 'center',
  },
  actionIcon: {
    marginRight: 18,
  },
  bookmarkIcon: {
    marginLeft: 'auto',
  },

  // FOOTER CONTENT STYLES
  likes: {
    fontWeight: 'bold',
    marginBottom: 6,
  },
  caption: {},
  created: {
    color: '#808080',
  },
});
export default style;
