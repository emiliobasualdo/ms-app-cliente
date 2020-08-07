import { StyleSheet } from 'react-native';
import { green } from '@constants/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '100%'
  },
  form: {
    width: 250
  },
  formButton: {
    backgroundColor: green,
    padding: 10,
    borderRadius: 3,
    marginTop: 15
  }
});
