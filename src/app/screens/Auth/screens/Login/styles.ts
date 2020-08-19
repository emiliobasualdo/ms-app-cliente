import { StyleSheet } from 'react-native';
import { brandLightBlue, green, white } from '@constants/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '100%'
  },
  form: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'center',
    marginVertical: 25
  },
  formButton: {
    backgroundColor: green,
    padding: 10,
    borderRadius: 3,
    marginTop: 15
  },
  formContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: brandLightBlue
  },
  prefixInput: {
    marginRight: 25,
    width: 85
  },
  phoneNumberInput: {
    width: 200
  },
  mainContainer: {
    paddingHorizontal: 20,
    backgroundColor: white,
    height: '80%',
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 90
  },
  buttonText: {
    color: white
  }
});
