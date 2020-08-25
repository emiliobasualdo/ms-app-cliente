import React from 'react';
import { Button, SafeAreaView } from 'react-native';
import CustomText from '@components/CustomText';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import styles from './styles';

function CustomBottomTab({
  navigation,
  navigationState,
  getLabel,
  renderIcon,
  activeTintColor,
  inactiveTintColor
}: BottomTabBarProps) {
  console.warn({ navigation, navigationState, getLabel, renderIcon, activeTintColor, inactiveTintColor });
  return (
    <SafeAreaView style={styles.container}>
      <Button title="Home" />
      <Button title="Pagar" />
      <Button title="Perfil" />
    </SafeAreaView>
  );
}

export default CustomBottomTab;
