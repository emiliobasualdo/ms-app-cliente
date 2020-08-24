import React from 'react';
import { SafeAreaView } from 'react-native';
import CustomText from '@components/CustomText';

import Avatar from '../Avatar';

import styles from './styles';

function HomeHeader() {
  return (
    <SafeAreaView style={styles.container}>
      <CustomText white xmedium semiBold>
        Mi tarjeta
      </CustomText>
      <Avatar name="Matias Grote" style={styles.avatar} />
    </SafeAreaView>
  );
}

export default HomeHeader;
