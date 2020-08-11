import React from 'react';

import OnBoardingSteps from './components/OnBoardingSteps';

export default [
  <OnBoardingSteps key={'FirstScreen'} step={1} />,
  <OnBoardingSteps key={'SecondScreen'} step={2} />,
  <OnBoardingSteps key={'ThirdScreen'} step={3} />
  // <OnBoardingSteps key={'FourthScreen'} step={4} />
];
console.disableYellowBox = true;
