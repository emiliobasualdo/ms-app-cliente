import { StyleSheet } from 'react-native';
import { brandLightBlue, white } from '@constants/colors';

export default StyleSheet.create({
  contentContainer: {
    justifyContent: 'center',
    flexGrow: 1
  },
  form: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'center',
    marginVertical: 25
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
    paddingTop: 50,
    alignItems: 'center'
  },

  buttonText: {
    color: white
  },
  inputTextStyle: {
    fontSize: 20,
    textAlign: 'center'
  }
});
