import { StyleSheet } from 'react-native';
import { transparent } from '@constants/colors';
import { MARGIN, refRatioScale } from '@constants/platform';

export const WIDTH_CARD = refRatioScale(180);
export const HEIGHT_CARD = refRatioScale(140);
export const MARGIN_SCALE = refRatioScale(MARGIN);

export default StyleSheet.create({
  aa: {
    width: WIDTH_CARD,
    height: HEIGHT_CARD,
    marginLeft: MARGIN_SCALE,
    borderRadius: 14
  },
  ab: { width: WIDTH_CARD, height: HEIGHT_CARD, borderRadius: 14 },
  ac: { borderRadius: 14 },
  ad: {
    flex: 1,
    backgroundColor: transparent,
    borderRadius: 14,
    justifyContent: 'space-between'
  },
  ae: {
    height: 60,
    borderRadius: 14,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingRight: 10,
    paddingTop: 15
  },
  af: {
    height: 60,
    borderRadius: 14,
    justifyContent: 'flex-end',
    paddingLeft: 15,
    paddingBottom: 10
  }
});
