import { StyleSheet } from 'react-native';
import { MARGIN, WINDOW_HEIGHT } from '@constants/platform';
import { black, white } from '@constants/colors';

export const styles = StyleSheet.create({
  // eslint-disable-next-line react-native/no-color-literals
  aa: {
    flex: 1,
    backgroundColor: 'rgba(13,31,60,0.49)',
    justifyContent: 'flex-start',
    paddingTop: WINDOW_HEIGHT * 0.2
  },
  ab: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  ac: {
    backgroundColor: white,
    marginHorizontal: MARGIN,
    minHeight: 100,
    borderRadius: 20,
    alignItems: 'center',
    paddingTop: MARGIN * 2,
    shadowColor: black,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11
  }
});
