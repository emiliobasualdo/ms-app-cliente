import React from 'react';
import { View } from 'react-native';
import CustomText from '@components/CustomText';
import CustomButton from '@components/CustomButton';

import styles from './styles';

interface Props {
  title: string;
  subtitle: string;
  primaryActionTitle: string;
  primaryAction: () => void;
}

function CustomModal({ title, subtitle, primaryActionTitle, primaryAction }: Props) {
  return (
    <View style={styles.container}>
      <CustomText bold center xbig brandDarkBlue>
        {title}
      </CustomText>
      <CustomText center style={styles.subtitle}>
        {subtitle}
      </CustomText>
      <CustomButton bold primary title={primaryActionTitle} onPress={primaryAction} style={styles.button} />
    </View>
  );
}

export default CustomModal;
