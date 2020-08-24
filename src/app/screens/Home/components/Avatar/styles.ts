import { StyleSheet } from 'react-native';
import { white, brandDarkBlueAvatar } from '@constants/colors';

const AVATAR_SIZE = 40;

export default StyleSheet.create({
  container: {
    backgroundColor: white,
    borderRadius: 25,
    height: AVATAR_SIZE,
    width: AVATAR_SIZE,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyles: {
    color: brandDarkBlueAvatar
  }
});
