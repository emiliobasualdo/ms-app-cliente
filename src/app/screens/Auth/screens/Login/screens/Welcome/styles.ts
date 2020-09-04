import { StyleSheet } from 'react-native';
import { black, brandBlue } from '@constants/colors';
import { scale } from '@utils/scalingUtils';
import { isIos } from '@constants/platform';

const shadow = isIos
  ? {
      shadowOffset: {
        width: 0,
        height: 4
      },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
      shadowColor: black
    }
  : {
      elevation: 8
    };

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
    marginTop: scale(60),
    marginBottom: scale(200),
    ...shadow
  }
});
