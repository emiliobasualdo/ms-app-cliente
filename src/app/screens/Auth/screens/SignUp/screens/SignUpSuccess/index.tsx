import React from 'react';
import { Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomText from '@components/CustomText';
import CustomButton from '@components/CustomButton';
import imgSignUpSuccess from '@assets/imgSignUpSuccess.png';

import styles from './styles';

function SignUpSuccess() {
  // eslint-disable-next-line no-empty-function
  const handleBeggin = () => {};
  return (
    <LinearGradient colors={['#34A3E2', '#263996']} style={styles.container}>
      <CustomText brandGray xbig>
        Ya creamos tu tarjeta virtual
      </CustomText>
      <Image source={imgSignUpSuccess} style={styles.image} />
      <CustomButton semiBold tertiary textStyle={styles.button} onPress={handleBeggin} title="Mi billetera" />
    </LinearGradient>
  );
}

export default SignUpSuccess;
