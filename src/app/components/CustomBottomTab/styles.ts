import { StyleSheet } from 'react-native';
import { tabBarBackground, brandBlue } from '@constants/colors';
import { refRatioScale } from '@constants/platform';

const CIRCLE_SIZE = 65;
const ICON_SIZE = 30;
const BORDER_RADIUS = 20;
const BOTTOM_TAB_PADDING = 10;

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    backgroundColor: tabBarBackground,
    borderTopLeftRadius: BORDER_RADIUS,
    borderTopRightRadius: BORDER_RADIUS,
    marginTop: -refRatioScale(50)
  },
  button: {
    alignItems: 'center',
    flexDirection: 'column',
    paddingBottom: BOTTOM_TAB_PADDING
  },
  circle: {
    marginTop: -refRatioScale(20),
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    backgroundColor: brandBlue,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5
  },
  commonButtonIcon: {
    marginBottom: 5
  },
  icon: {
    width: ICON_SIZE,
    height: ICON_SIZE
  },
  qrContainer: {
    alignItems: 'center',
    paddingBottom: BOTTOM_TAB_PADDING
  }
});
