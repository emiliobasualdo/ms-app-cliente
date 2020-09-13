import React from 'react';
import { SafeAreaView, Image, TouchableOpacity, View } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import CustomButton from '@components/CustomButton';
import CustomText from '@components/CustomText';
import Routes from '@constants/routes';
import icHome from '@assets/icHome.png';
import icPerfil from '@assets/icPerfil.png';
import icQrCode from '@assets/icQrCode.png';

import styles from './styles';

function CustomBottomTab({ navigation }: BottomTabBarProps) {
  // These are the available props
  // navigationState,
  // getLabel,
  // renderIcon,
  // activeTintColor,
  // inactiveTintColor

  const handleHome = () => navigation.navigate(Routes.Home);
  const handleQr = () => navigation.navigate(Routes.QrCodeScanner);

  return (
    <SafeAreaView style={styles.container}>
      <CustomButton
        title="Home"
        icon={icHome}
        onPress={handleHome}
        style={styles.button}
        iconStyle={styles.icon}
      />
      <View style={styles.qrContainer}>
        <TouchableOpacity onPress={handleQr}>
          <View style={styles.circle}>
            <Image style={styles.icon} source={icQrCode} />
          </View>
        </TouchableOpacity>
        <CustomText>Pagar</CustomText>
      </View>
      <CustomButton
        title="Perfil"
        icon={icPerfil}
        onPress={handleHome}
        style={styles.button}
        iconStyle={styles.icon}
      />
    </SafeAreaView>
  );
}

export default CustomBottomTab;
