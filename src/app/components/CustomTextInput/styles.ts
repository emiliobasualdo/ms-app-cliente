import { StyleSheet } from 'react-native';
import fonts from '@config/fonts';
import { blue, gray, darkGray, red } from '@constants/colors';
import { SIZES } from '@constants/fonts';

export default StyleSheet.create({
  container: {
    marginBottom: 5
  },
  withAnimatedLabel: {
    marginTop: 20
  },
  multilineContainer: {
    borderColor: darkGray,
    borderWidth: 1,
    height: 75,
    paddingHorizontal: 5
  },
  inputContainer: {
    paddingHorizontal: 8,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: darkGray,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  secondaryInputContainer: {
    borderWidth: 0,
    borderBottomWidth: 1
  },
  bottomBorderBlue: {
    borderColor: blue
  },
  bottomBorderRed: {
    borderColor: red
  },
  bottomBorderLightGray: {
    borderColor: gray
  },
  inputStyle: {
    ...fonts.baseFont,
    fontSize: SIZES.SMALL,
    color: darkGray,
    padding: 0,
    margin: 0
  },
  singleInput: {
    flex: 1
  },
  errorContainer: {
    height: 20,
    marginTop: 3
  },
  secondary: {
    height: 800
  }
});
