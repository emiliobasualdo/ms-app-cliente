import React from 'react';
import { View, Image } from 'react-native';

import { STEP_DATA } from './constants';
import styles from './styles';

interface Props {
  step: number;
  key?: string;
}

function onBoardingSteps({ step }: Props) {
  const { image, imageStyle } = STEP_DATA[step];
  return (
    <View style={styles.container}>
      <Image source={image} style={imageStyle} resizeMode="contain" />
    </View>
  );
}

export default onBoardingSteps;
