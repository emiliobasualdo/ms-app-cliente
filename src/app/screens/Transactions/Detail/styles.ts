import { StyleSheet } from 'react-native';
import { MARGIN, WINDOW_WIDTH } from '@constants/platform';
import { white } from '@constants/colors';

export const styles = StyleSheet.create({
  aa: { flexDirection: 'column', justifyContent: 'center', marginTop: MARGIN },
  ab: { backgroundColor: white, flex: 1, paddingHorizontal: MARGIN, marginBottom: 52 },
  ac: { marginBottom: MARGIN, marginTop: MARGIN },
  ad: { height: WINDOW_WIDTH * 0.35, justifyContent: 'center', alignItems: 'center' },
  ae: {
    flexDirection: 'row',
    borderColor: 'rgba(207,210,216,0.51)',
    borderBottomWidth: 1,
    paddingBottom: MARGIN / 2
  },
  af: { flexDirection: 'column', justifyContent: 'space-between', flex: 1 },
  ag: { flexDirection: 'column', justifyContent: 'space-between', flex: 1, marginLeft: MARGIN },
  ah: { flexDirection: 'row', alignItems: 'center' },
  ai: { marginLeft: MARGIN }
});
