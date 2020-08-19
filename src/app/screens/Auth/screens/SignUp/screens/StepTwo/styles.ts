import { StyleSheet } from 'react-native';
import { brandLightBlue, white } from '@constants/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    backgroundColor: brandLightBlue
  },
  stretchAndFlex: {
    alignSelf: 'stretch'
  },
  form: {
    paddingHorizontal: 60,
    paddingBottom: 20
  },
  formButton: {
    marginTop: 20
  },
  inputsContainer: {
    marginTop: 140,
    paddingHorizontal: 30,
    paddingTop: 70,
    backgroundColor: white,
    flex: 1,
    width: '100%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20
  },
  buttonText: {
    color: white
  }
});
