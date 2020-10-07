import { StyleSheet } from 'react-native';
import { MARGIN, WINDOW_HEIGHT } from '@constants/platform';
import { black } from '@constants/colors';

export const styles = StyleSheet.create({
  aa: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: WINDOW_HEIGHT * 0.3
  },
  ab: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  // eslint-disable-next-line react-native/no-color-literals
  ac: {
    backgroundColor: 'rgba(57,173,235,0.8)',
    marginHorizontal: MARGIN,
    paddingHorizontal: MARGIN,
    minHeight: 50,
    borderRadius: 28,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: black,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11
  },
  ad: {
    flex: 1
  }
});
