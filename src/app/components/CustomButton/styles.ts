import { StyleSheet } from 'react-native';
import { transparent, black, green, gray, white, brandBlue } from '@constants/colors';

const iconSize = 20;

const borderlessStyle = {
  borderWidth: 0,
  backgroundColor: transparent
};

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8
  },
  icon: {
    height: iconSize,
    width: iconSize
  },
  borderless: borderlessStyle,
  radial: {
    borderRadius: 100
  },
  black: {
    backgroundColor: black
  },
  blackContent: {
    color: white
  },
  white: {
    backgroundColor: white
  },
  whiteContent: {
    color: black
  },
  gray: {
    backgroundColor: gray
  },
  grayContent: {
    color: black
  },
  borderlessContent: {
    color: gray
  },
  green: {
    backgroundColor: green
  },
  greenContent: {
    color: white
  },
  primary: {
    color: white,
    backgroundColor: brandBlue,
    alignSelf: 'center',
    width: '45%',
    height: 45,
    borderRadius: 20
  },
  secondary: {
    borderWidth: 1,
    borderColor: brandBlue,
    backgroundColor: white,
    color: brandBlue,
    alignSelf: 'center',
    width: '45%',
    height: 45,
    borderRadius: 20
  },
  tertiary: {
    color: brandBlue,
    backgroundColor: white,
    alignSelf: 'center',
    width: '45%',
    height: 45,
    borderRadius: 20
  }
});
