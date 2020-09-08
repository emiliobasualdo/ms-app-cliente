import React, { memo } from 'react';

import './i18n';
import Swiper from './components/Swiper';

function OnBoardingContainer() {
  // TODO: Add functionallity
  const handleSkipOnBoarding = () => {};
  return <Swiper onSkip={handleSkipOnBoarding} />;
}

export default memo(OnBoardingContainer);
