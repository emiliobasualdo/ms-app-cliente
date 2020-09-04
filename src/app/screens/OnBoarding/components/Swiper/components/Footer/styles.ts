import { StyleSheet } from 'react-native';
import { blue } from '@constants/colors';

export default StyleSheet.create({
  buttonContainer: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: blue,
    width: 100
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: '45%'
  }
});
