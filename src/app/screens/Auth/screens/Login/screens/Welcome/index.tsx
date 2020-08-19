import React from 'react';
import { Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomText from '@components/CustomText';
import CustomButton from '@components/CustomButton';
import quilmeslogo from '@app/assets/quilmesLogo.png';
import { Navigation } from '@interfaces/navigation';
import Routes from '@constants/routes';

import styles from './styles';

function Welcome({ navigation }: Navigation) {
  return (
    <LinearGradient colors={['#34A3E2', '#263996']} style={styles.container}>
      <CustomText brandGray xbig>
        Bienvenido a
      </CustomText>
      <Image source={quilmeslogo} resizeMode="contain" style={styles.image} />
      <CustomButton
        tertiary
        semiBold
        textStyle={styles.button}
        onPress={() => navigation.navigate(Routes.OnBoarding)}
        title="Mi billetera"
      />
    </LinearGradient>
  );
}

export default Welcome;
