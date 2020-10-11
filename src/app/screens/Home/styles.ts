import { StyleSheet } from 'react-native';
import { green, white, whiteTransparent } from '@constants/colors';
import { MARGIN, VIEWPORT_HEIGHT, WINDOW_HEIGHT, WINDOW_WIDTH } from '@constants/platform';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  home: {
    backgroundColor: green,
    padding: 10,
    borderRadius: 3
  },
  aa: { height: WINDOW_HEIGHT * (VIEWPORT_HEIGHT < 500 ? 0.4 : 0.35) },
  ab: { alignItems: 'center' },
  ac: { marginVertical: WINDOW_HEIGHT * (VIEWPORT_HEIGHT < 500 ? 0.03 : 0.05) },
  ad: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -60
  },
  ae: { marginRight: 15, width: 45 },
  af: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  ag: { color: whiteTransparent },
  ah: { color: whiteTransparent, marginLeft: 6 },
  ai: {
    // height: WINDOW_HEIGHT * 0.65,
    backgroundColor: white,
    borderTopLeftRadius: 20,
    borderTopEndRadius: 20,
    top: -20,
    paddingTop: MARGIN,
    zIndex: 10
  },
  aj: {
    width: 12,
    height: 12,
    marginLeft: 4
  },
  ak: {
    zIndex: 11,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  al: {
    flexDirection: 'row',
    width: WINDOW_WIDTH,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  am: { width: 30, height: 30 }
});
