import React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import CustomText from '@components/CustomText';

import { getInitials } from './utils';
import styles from './styles';

interface Props {
  name: string;
  style: StyleProp<ViewStyle>;
}

function Avatar({ name, style }: Props) {
  return (
    <View style={[styles.container, style]}>
      <CustomText style={styles.textStyles}>{getInitials(name)}</CustomText>
    </View>
  );
}

export default Avatar;
