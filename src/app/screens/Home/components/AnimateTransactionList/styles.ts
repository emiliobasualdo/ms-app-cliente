import { StyleSheet } from 'react-native';
import { MARGIN, WINDOW_HEIGHT } from '@constants/platform';
import { lightGray } from '@constants/colors';

export const styles = StyleSheet.create({
  aa: {
    zIndex: 11,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  ab: { height: WINDOW_HEIGHT - 200 },
  ac: { marginBottom: MARGIN / 2, marginHorizontal: MARGIN },
  ad: { color: lightGray, marginHorizontal: MARGIN },
  ae: {
    marginTop: MARGIN
  }
});
