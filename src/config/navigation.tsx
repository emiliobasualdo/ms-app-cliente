import React from 'react';
import i18next from 'i18next';
import Routes from '@constants/routes';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { blue, brandDarkBlue, white } from '@constants/colors';
import statusBarConfig from '@constants/statusBar';
import { Navigation } from '@interfaces/navigation';
import { SIZES } from '@constants/fonts';
import CustomBottomTab from '@components/CustomBottomTab/index';
import { IS_SMALL_DEVICE } from '@constants/platform';

import fonts from './fonts';

// Default nav options for all screens
const defaultNavOptions = ({ route }: Navigation) => ({
  // Change screen title from i18n traslates files
  headerTitle: i18next.t(`app:${route.name}`),
  // TODO: The following options are examples. Change them to your need
  headerStyle: {
    backgroundColor: blue
  },
  headerBackTitleStyle: {
    color: white
  },
  headerTitleStyle: {
    ...fonts.baseFont,
    color: white
  },
  headerTintColor: white
});

const transparentHeader = (fontColor: string) => ({
  headerStyle: {
    backgroundColor: 'transparent',
    borderBottomWidth: 0
  },
  headerTitleStyle: {
    ...fonts.boldFont,
    color: fontColor
  },
  headerBackTitle: ' ',
  headerTintColor: fontColor,
  headerTransparent: true
});

export const noHeader = {
  headerShown: false
};

export const appStackNavConfig = {
  screenOptions: defaultNavOptions
};

export const authStackNavConfig = {
  screenOptions: defaultNavOptions,
  initialRouteName: Routes.Welcome
};

const defaultTabNavOptions = {};

export const tabStackNavConfig = {
  screenOptions: defaultTabNavOptions,
  tabBar: (props: BottomTabBarProps) => <CustomBottomTab {...props} />
};

const authCommonOptions = (title = 'Código de verificación') => ({
  headerTitle: title,
  ...transparentHeader(brandDarkBlue),
  headerTitleStyle: {
    fontSize: IS_SMALL_DEVICE ? SIZES.BIG : SIZES.XBIG,
    fontWeight: '600'
  }
});

// Default nav options for all screens
export const appScreensNavOptions = {
  // TODO: Add here the screens nav options that changes with respect to
  // the default ones defined in defaultNavOptions, for example...
  [Routes.Login]: authCommonOptions(),
  [Routes.VerificationCode]: authCommonOptions(),
  [Routes.SignUp]: authCommonOptions('Crear cuenta'),
  [Routes.StepTwo]: authCommonOptions('Crear cuenta'),
  [Routes.OnBoarding]: {
    headerShown: false
  },
  [Routes.Home]: noHeader,
  [Routes.SignUpSuccess]: noHeader,
  [Routes.Welcome]: noHeader
};

export const statusBarStyles = {
  // TODO: Change these styles to customize the status bar
  [Routes.Login]: statusBarConfig.transparentStatusBar,
  [Routes.SignUp]: statusBarConfig.transparentStatusBar,
  [Routes.SignUpSuccess]: statusBarConfig.transparentStatusBarWhite,
  [Routes.Welcome]: statusBarConfig.transparentStatusBarWhite,
  [Routes.Home]: statusBarConfig.transparentStatusBarWhite,
  default: statusBarConfig.transparentStatusBar
};

export interface TabProps {
  focused: boolean;
  routeName: string;
  onPress: () => void;
  index: number;
}
