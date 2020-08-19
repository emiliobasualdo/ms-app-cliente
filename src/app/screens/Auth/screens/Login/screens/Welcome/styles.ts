import { StyleSheet } from 'react-native';
import { black, brandBlue } from '@constants/colors';
import { scale } from '@utils/scalingUtils';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    color: brandBlue
  },
  image: {
    width: 300,
    height: 200,
    marginTop: scale(120),
    marginBottom: scale(200),
    shadowColor: black,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8
  }
});
