import { refRatioScale } from '@constants/platform';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: refRatioScale(50),
    width: '100%'
  },
  avatar: {
    position: 'absolute',
    right: 25
  }
});
