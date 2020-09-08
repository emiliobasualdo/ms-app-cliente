import React from 'react';
import { Image } from 'react-native';
import i18next from 'i18next';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch } from 'react-redux';
import CustomText from '@components/CustomText';
import CustomButton from '@components/CustomButton';
import imgSignUpSuccess from '@assets/imgSignUpSuccess.png';
import { gradientColorArray } from '@constants/colors';
import { actionCreators as AuthActions } from '@redux/auth/actions';

import styles from './styles';
import '../../i18n';

function SignUpSuccess() {
  // TODO: Borrar esto si no es necesario, sino adaptarlo
  // const [, , error, signUp] = useAsyncRequest({
  //   request: AuthService.signup,
  //   withPostSuccess: () => navigation.navigate(Routes.StepTwo)
  // });
  // const hasSignUpError = !!error;
  // const handleSignUp = useCallback(
  //   values => {
  //     Keyboard.dismiss();
  //     signUp(values);
  //   },
  //   [signUp]
  // );
  const dispatch = useDispatch();

  // TODO: Cambiar esto por los valores correspondientes del proceso.
  const credentialsExample = { phoneNumber: '+351967078594', code: '1111' };
  const handleBeggin = () => dispatch(AuthActions.login(credentialsExample));

  return (
    <LinearGradient colors={gradientColorArray} style={styles.container}>
      <CustomText brandGray xbig>
        {i18next.t('SIGNUP:WALLET_CREATED')}
      </CustomText>
      <Image source={imgSignUpSuccess} style={styles.image} />
      <CustomButton
        semiBold
        tertiary
        onPress={handleBeggin}
        textStyle={styles.button}
        title={i18next.t('SIGNUP:MY_WALLET')}
      />
    </LinearGradient>
  );
}

export default SignUpSuccess;
