import React from 'react';
import { Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomText from '@components/CustomText';
import CustomButton from '@components/CustomButton';
import quilmeslogo from '@app/assets/quilmesLogo.png';
import { Navigation } from '@interfaces/navigation';
import { gradientColorArray } from '@constants/colors';
import Routes from '@constants/routes';

import styles from './styles';

function Welcome({ navigation }: Navigation) {
  const handleNext = () => navigation.navigate(Routes.OnBoarding);
  return (
    <LinearGradient colors={gradientColorArray} style={styles.container}>
      <CustomText brandGray xbig>
        Bienvenido a
      </CustomText>
      <Image source={quilmeslogo} resizeMode="contain" style={styles.image} />
      <CustomButton tertiary semiBold textStyle={styles.button} onPress={handleNext} title="Mi billetera" />
    </LinearGradient>
  );
}

export default Welcome;
