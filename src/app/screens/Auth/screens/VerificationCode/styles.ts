import { StyleSheet } from 'react-native';
import { brandLightBlue, brandGray, white, brandBlue } from '@constants/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: brandLightBlue,
    paddingTop: 100
  },
  root: {
    flex: 1,
    padding: 20
  },
  message: {
    marginBottom: 150
  },
  title: {
    textAlign: 'center',
    fontSize: 30
  },
  codeFieldRoot: {
    marginTop: 20
  },
  cell: {
    width: 60,
    height: 60,
    borderColor: brandGray,
    marginHorizontal: 7,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: white
  },
  cellText: {
    lineHeight: 38,
    fontSize: 24,
    textAlign: 'center'
  },
  focusCell: {
    borderColor: brandBlue
  }
});
