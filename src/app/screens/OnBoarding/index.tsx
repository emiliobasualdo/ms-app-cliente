import React, { memo } from 'react';
import './i18n';
import { useNavigation } from '@react-navigation/native';
import Routes from '@constants/routes';

import Swiper from './components/Swiper';

function OnBoardingContainer() {
  // TODO: Add functionallity
  const navigation = useNavigation();
  const handleSkipOnBoarding = () => {
    navigation.navigate(Routes.Login);
  };
  return <Swiper onSkip={handleSkipOnBoarding} />;
}

export default memo(OnBoardingContainer);
