import { StyleSheet } from 'react-native';
import { smokeWhite, white } from '@constants/colors';

import { MARGIN_SCALE } from '../SliderCards/styles';

export const styles = StyleSheet.create({
  aa: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: MARGIN_SCALE
  },
  ab: { backgroundColor: smokeWhite, padding: 4, borderRadius: 16 },
  ac: { flex: 1, marginHorizontal: MARGIN_SCALE },
  // eslint-disable-next-line react-native/no-color-literals
  ad: { flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(13,31,60,0.49)' },
  ae: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  af: { flex: 1 },
  ag: {
    backgroundColor: white,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    paddingTop: MARGIN_SCALE,
    paddingHorizontal: MARGIN_SCALE,
    paddingBottom: MARGIN_SCALE * 2
  },
  ah: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: MARGIN_SCALE },
  ai: { flexDirection: 'row', marginBottom: MARGIN_SCALE },
  aj: { backgroundColor: smokeWhite, minWidth: 100, marginRight: MARGIN_SCALE },
  ak: { backgroundColor: smokeWhite, minWidth: 100 },
  al: { marginTop: MARGIN_SCALE },
  am: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: MARGIN_SCALE
  },
  an: { backgroundColor: smokeWhite, padding: 4, borderRadius: 16 },
  ao: { flex: 1, marginHorizontal: MARGIN_SCALE }
});