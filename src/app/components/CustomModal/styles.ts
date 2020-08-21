import { StyleSheet } from 'react-native';
import { white } from '@constants/colors';
import { refRatioScale } from '@constants/platform';

const BORDER_RADIUS = 30;

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    alignItems: 'center',
    backgroundColor: white,
    width: '100%',
    paddingVertical: 40,
    borderTopLeftRadius: BORDER_RADIUS,
    borderTopRightRadius: BORDER_RADIUS
  },
  subtitle: {
    marginVertical: 30,
    marginHorizontal: 30
  },
  button: {
    position: 'absolute',
    bottom: refRatioScale(25)
  },
  buttonText: {
    color: white
  }
});
