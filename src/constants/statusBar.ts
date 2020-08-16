import { blue, white, translucent } from './colors';

const DARK_CONTENT = 'dark-content';
const LIGHT_CONTENT = 'light-content';

const commonTransparentConfig = {
  translucent: true,
  backgroundColor: translucent
};

const statusBarConfig = {
  transparentStatusBar: {
    barStyle: DARK_CONTENT,
    ...commonTransparentConfig
  },
  transparentStatusBarWhite: {
    barStyle: LIGHT_CONTENT,
    ...commonTransparentConfig
  },
  blueStatusBar: { barStyle: 'light-content', backgroundColor: blue },
  whiteStatusBar: { barStyle: 'dark-content', backgroundColor: white }
} as const;

export default statusBarConfig;
