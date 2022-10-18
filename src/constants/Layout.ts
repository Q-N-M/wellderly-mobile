import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

/**
 * This is used to get the dimension of the screen
 */
export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};
