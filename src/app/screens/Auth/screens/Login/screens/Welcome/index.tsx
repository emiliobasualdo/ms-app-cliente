import React from 'react';
import { Image } from 'react-native';
import i18next from 'i18next';
import LinearGradient from 'react-native-linear-gradient';
import CustomText from '@components/CustomText';
import CustomButton from '@components/CustomButton';
import quilmeslogo from '@app/assets/quilmesLogo.png';
import { Navigation } from '@interfaces/navigation';
import { gradientColorArray } from '@constants/colors';
import Routes from '@constants/routes';

import styles from './styles';
import '../../i18n';

function Welcome({ navigation }: Navigation) {
  const handleNext = () => navigation.navigate(Routes.OnBoarding);
  return (
    <LinearGradient colors={gradientColorArray} style={styles.container}>
      <CustomText brandGray xbig>
        {i18next.t('LOGIN:WELCOME_TO')}
      </CustomText>
      <Image source={quilmeslogo} resizeMode="contain" style={styles.image} />
      <CustomButton
        tertiary
        semiBold
        textStyle={styles.button}
        onPress={handleNext}
        title={i18next.t('LOGIN:MY_WALLET')}
      />
    </LinearGradient>
  );
}

export default Welcome;
