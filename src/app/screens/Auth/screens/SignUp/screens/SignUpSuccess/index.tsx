import React from 'react';
import { Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomText from '@components/CustomText';
import CustomButton from '@components/CustomButton';
import imgSignUpSuccess from '@assets/imgSignUpSuccess.png';
import Routes from '@constants/routes';
import { Navigation } from '@interfaces/navigation';
import { gradientColorArray } from '@constants/colors';

import styles from './styles';

function SignUpSuccess({ navigation }: Navigation) {
  const handleBeggin = () => navigation.navigate(Routes.Home);
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
