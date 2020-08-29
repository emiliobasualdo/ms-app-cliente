import React from 'react';
import { Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch } from 'react-redux';
import CustomText from '@components/CustomText';
import CustomButton from '@components/CustomButton';
import imgSignUpSuccess from '@assets/imgSignUpSuccess.png';
import { gradientColorArray } from '@constants/colors';
import { actionCreators as AuthActions } from '@redux/auth/actions';

import styles from './styles';

function SignUpSuccess() {
  const dispatch = useDispatch();

  const handleBeggin = () => dispatch(AuthActions.login({ phoneNumber: '+351967078594', code: '1111' }));

  return (
    <LinearGradient colors={gradientColorArray} style={styles.container}>
      <CustomText brandGray xbig>
        Ya creamos tu tarjeta virtual
      </CustomText>
      <Image source={imgSignUpSuccess} style={styles.image} />
      <CustomButton semiBold tertiary textStyle={styles.button} onPress={handleBeggin} title="Mi billetera" />
    </LinearGradient>
  );
}

export default SignUpSuccess;
